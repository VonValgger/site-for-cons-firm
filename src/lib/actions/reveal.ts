import type { Action } from 'svelte/action';

export type RevealOptions = {
	/** Stagger in ms before the entrance starts. */
	delay?: number;
	/** `up` fades and rises; `image` wipes the element open from the bottom. */
	variant?: 'up' | 'image';
};

type Reveal = (instant: boolean) => void;

const pending = new Map<Element, Set<Reveal>>();
let observer: IntersectionObserver | undefined;
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

const getObserver = () =>
	(observer ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				// Already scrolled past (anchor jump, restored scroll): show it without animating.
				const passed = entry.boundingClientRect.bottom < 0;
				if (!entry.isIntersecting && !passed) continue;
				observer!.unobserve(entry.target);
				pending.get(entry.target)?.forEach((reveal) => reveal(passed));
				pending.delete(entry.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px' }
	));

const watch = (target: Element, reveal: Reveal) => {
	const set = pending.get(target);
	if (set) set.add(reveal);
	else {
		pending.set(target, new Set([reveal]));
		getObserver().observe(target);
	}
};

const unwatch = (target: Element, reveal: Reveal) => {
	const set = pending.get(target);
	if (!set?.delete(reveal) || set.size) return;
	pending.delete(target);
	observer?.unobserve(target);
};

/**
 * Animates an element in the first time it scrolls into view. Content stays
 * visible in the prerendered HTML: on first load only elements below the fold
 * are hidden on mount, and nothing happens under reduced motion.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (!navigating && node.getBoundingClientRect().top < window.innerHeight) return;

	const variant = options.variant ?? 'up';
	const classes = ['reveal', `reveal-${variant}`, 'is-revealed'];
	node.style.setProperty('--reveal-delay', `${options.delay ?? 0}ms`);
	node.classList.add('reveal', `reveal-${variant}`);

	// Drop the reveal styles once the entrance has played, so hover transforms own the element again.
	const cleanup = () => {
		node.removeEventListener('transitionend', onEnd);
		node.classList.remove(...classes);
		node.style.removeProperty('--reveal-delay');
	};
	const onEnd = (event: TransitionEvent) => {
		if (event.target === node) cleanup();
	};

	const show: Reveal = (instant) => {
		if (instant) return cleanup();
		node.addEventListener('transitionend', onEnd);
		node.classList.add('is-revealed');
	};

	// A fully clipped element never counts as intersecting in Chrome, so image wipes watch their parent.
	const target = (variant === 'image' && node.parentElement) || node;
	watch(target, show);

	return {
		destroy() {
			unwatch(target, show);
			node.removeEventListener('transitionend', onEnd);
		}
	};
};
