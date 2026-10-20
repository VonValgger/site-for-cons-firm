import type { Action } from 'svelte/action';

// Clipping frame → the image drifting inside it.
const images = new Map<Element, HTMLElement>();
const visible = new Set<Element>();
let observer: IntersectionObserver | undefined;
let raf = 0;

// --parallax runs from -1 (frame entering at the bottom) to 1 (frame leaving at the top).
const update = () => {
	raf = 0;
	const half = window.innerHeight / 2;
	for (const frame of visible) {
		const rect = frame.getBoundingClientRect();
		const progress = (half - (rect.top + rect.height / 2)) / (half + rect.height / 2);
		images.get(frame)?.style.setProperty('--parallax', Math.max(-1, Math.min(1, progress)).toFixed(4));
	}
};

const schedule = () => {
	if (!raf) raf = requestAnimationFrame(update);
};

const getObserver = () => {
	if (observer) return observer;
	window.addEventListener('scroll', schedule, { passive: true });
	window.addEventListener('resize', schedule, { passive: true });
	return (observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) visible.add(entry.target);
			else visible.delete(entry.target);
		}
		schedule();
	}));
};

/**
 * Lets a photo drift slowly inside its clipping parent as the page scrolls, in
 * both directions. `.parallax` in app.css over-scales the image so its edges
 * never show; nothing moves under reduced motion.
 */
export const parallax: Action<HTMLElement> = (node) => {
	const frame = node.parentElement;
	if (!frame || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.classList.add('parallax');
	images.set(frame, node);
	// Watch the frame: the over-scaled image overflows it, and a reveal wipe may clip it.
	getObserver().observe(frame);

	return {
		destroy() {
			observer?.unobserve(frame);
			images.delete(frame);
			visible.delete(frame);
		}
	};
};
