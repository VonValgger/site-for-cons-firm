import type { Action } from 'svelte/action';

export type RevealOptions = {
	/** Stagger in ms before the entrance starts. */
	delay?: number;
	/** `up` fades and rises; `image` wipes the element open from the bottom. */
	variant?: 'up' | 'image';
};

type Handlers = {
	show: (instant: boolean) => void;
	/** Re-arms the entrance once the element has dropped back below the viewport. */
	rearm: () => void;
};

const watched = new Map<Element, Set<Handlers>>();
let showObserver: IntersectionObserver | undefined;
let rearmObserver: IntersectionObserver | undefined;
let navigating = false;

/**
 * Set by the root layout around client-side navigations. A page that mounts
 * mid-navigation still sees the previous page's scroll position, so the fold
 * check would be wrong; the observer sorts elements out once the router has
 * reset the scroll.
 */
export const markNavigation = (active: boolean) => {
	navigating = active;
};

const getObservers = () => {
	showObserver ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				// Already scrolled past (anchor jump, restored scroll): show it without animating.
				const passed = entry.boundingClientRect.bottom < 0;
				if (!entry.isIntersecting && !passed) continue;
				watched.get(entry.target)?.forEach((h) => h.show(passed));
			}
		},
		{ rootMargin: '0px 0px -8% 0px' }
	);
	// No margin here: only re-arm once the element is fully out of sight below the fold,
	// so scrolling back up never visibly hides anything.
	rearmObserver ??= new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const below = entry.boundingClientRect.top >= (entry.rootBounds?.bottom ?? window.innerHeight);
			if (entry.isIntersecting || !below) continue;
			watched.get(entry.target)?.forEach((h) => h.rearm());
		}
	});
	return [showObserver, rearmObserver];
};

const watch = (target: Element, handlers: Handlers) => {
	const set = watched.get(target);
	if (set) set.add(handlers);
	else {
		watched.set(target, new Set([handlers]));
		getObservers().forEach((o) => o.observe(target));
	}
};

const unwatch = (target: Element, handlers: Handlers) => {
	const set = watched.get(target);
	if (!set?.delete(handlers) || set.size) return;
	watched.delete(target);
	[showObserver, rearmObserver].forEach((o) => o?.unobserve(target));
};

/**
 * Animates an element in each time it scrolls into view from below. Content
 * stays visible in the prerendered HTML: on first load only elements below the
 * fold are hidden on mount, and nothing happens under reduced motion.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (!navigating && node.getBoundingClientRect().top < window.innerHeight) return;

	const variant = options.variant ?? 'up';
	const classes = ['reveal', `reveal-${variant}`, 'is-revealed'];
	let armed = false;

	const arm = () => {
		armed = true;
		node.removeEventListener('transitionend', onEnd);
		node.style.setProperty('--reveal-delay', `${options.delay ?? 0}ms`);
		// Snap to the hidden state instead of fading out off-screen.
		node.classList.add('reveal-snap', 'reveal', `reveal-${variant}`);
		node.classList.remove('is-revealed');
		void node.offsetWidth;
		node.classList.remove('reveal-snap');
	};

	// Drop the reveal styles once the entrance has played, so hover transforms own the element again.
	const cleanup = () => {
		node.removeEventListener('transitionend', onEnd);
		node.classList.remove(...classes);
		node.style.removeProperty('--reveal-delay');
	};
	const onEnd = (event: TransitionEvent) => {
		if (event.target === node) cleanup();
	};

	const handlers: Handlers = {
		show(instant) {
			if (!armed) return;
			armed = false;
			if (instant) return cleanup();
			node.addEventListener('transitionend', onEnd);
			node.classList.add('is-revealed');
		},
		rearm() {
			if (!armed) arm();
		}
	};

	arm();

	// A fully clipped element never counts as intersecting in Chrome, so image wipes watch their parent.
	const target = (variant === 'image' && node.parentElement) || node;
	watch(target, handlers);

	return {
		destroy() {
			unwatch(target, handlers);
			node.removeEventListener('transitionend', onEnd);
		}
	};
};
