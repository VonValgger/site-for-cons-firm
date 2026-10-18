<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { markNavigation } from '$lib/actions/reveal';
	import SmoothScroll from '$lib/components/SmoothScroll.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		markNavigation(true);
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(() => markNavigation(false));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SmoothScroll />

{@render children()}
