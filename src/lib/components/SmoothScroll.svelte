<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { afterNavigate, replaceState } from '$app/navigation';
	import 'lenis/dist/lenis.css';

	let lenis: Lenis | undefined;

	// The router resets or restores the scroll on navigation; without a resync Lenis
	// resumes from the previous page's position on the next wheel tick.
	afterNavigate(() => {
		lenis?.resize();
		lenis?.scrollTo(window.scrollY, { immediate: true, force: true });
	});

	// Inertial wheel scrolling. Touch keeps the platform's native momentum.
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const smooth = (lenis = new Lenis({
			autoRaf: true,
			lerp: 0.075, // lower glides longer
			wheelMultiplier: 0.9,
			stopInertiaOnNavigate: true
		}));

		// Same-page hash links glide too. Lenis honours scroll-margin-top, and
		// preventDefault keeps SvelteKit's router from jumping there instantly.
		const onClick = (event: MouseEvent) => {
			if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
			if (!link || link.target) return;
			const url = new URL(link.href);
			if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
			const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
			if (!target) return;

			event.preventDefault();
			replaceState(url.href, {});
			smooth.scrollTo(target);
		};

		document.addEventListener('click', onClick, true);
		return () => {
			document.removeEventListener('click', onClick, true);
			smooth.destroy();
			lenis = undefined;
		};
	});
</script>
