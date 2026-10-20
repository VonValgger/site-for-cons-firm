<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Menu, X, Phone, ArrowRight } from '@lucide/svelte';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';

	let menuOpen = $state(false);

	const links = [
		{ href: `${base}/#services`, label: 'Palvelut' },
		{ href: `${base}/#references`, label: 'Referenssit' },
		{ href: `${base}/#about`, label: 'Meistä' },
		{ href: `${base}/#contact`, label: 'Yhteystiedot' }
	];

	afterNavigate(() => (menuOpen = false));

	// Keep the page behind the open menu still.
	$effect(() => {
		document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
		return () => (document.documentElement.style.overflow = '');
	});
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (menuOpen = false)} />

<style>
	.glass-nav {
		background: rgba(247, 250, 252, 0.85);
		backdrop-filter: blur(12px);
	}
</style>

<header class="fixed top-0 w-full z-50 glass-nav shadow-sm">
	<div class="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1800px] mx-auto">
		<div class="text-3xl font-black tracking-tighter text-slate-900">
			virman_nimi
		</div>
		<nav class="hidden md:flex gap-10 items-center">
			{#each links as link}
				<a class="text-slate-700 hover:text-slate-900 transition-colors font-headline font-extrabold tracking-tight text-lg" href={link.href}>{link.label}</a>
			{/each}
			<a class="bg-on-primary-container text-on-primary px-8 py-3 rounded-md font-extrabold hover:opacity-80 transition-opacity active:scale-95 duration-150 text-lg" href="{base}/#contact-form">
				Ota Yhteyttä
			</a>
		</nav>
		<button
			class="md:hidden -m-2 p-2 text-on-surface"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}<X size={28} />{:else}<Menu size={28} />{/if}
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		id="mobile-menu"
		class="md:hidden fixed inset-0 z-40 bg-surface flex flex-col px-6 pt-28 pb-10 overflow-y-auto"
		transition:fade={{ duration: 200 }}
	>
		<nav class="flex flex-col gap-2" aria-label="Päävalikko">
			{#each links as link, i}
				<a
					class="font-headline font-extrabold text-4xl tracking-tight text-on-surface py-2 active:text-on-primary-container"
					href={link.href}
					onclick={() => (menuOpen = false)}
					in:fly={{ y: 16, duration: 400, delay: 60 + i * 50 }}
				>
					{link.label}
				</a>
			{/each}
		</nav>
		<div class="mt-auto pt-12 flex flex-col gap-4" in:fly={{ y: 16, duration: 400, delay: 300 }}>
			<a
				class="bg-on-primary-container text-on-primary px-8 py-5 rounded-md font-bold text-xl flex items-center justify-between"
				href="{base}/#contact-form"
				onclick={() => (menuOpen = false)}
			>
				Pyydä tarjous <ArrowRight size={22} />
			</a>
			<a class="border-2 border-outline-variant text-on-surface px-8 py-5 rounded-md font-bold text-xl flex items-center gap-3" href="tel:+358111111111">
				<Phone size={22} /> +358 11 111 1111
			</a>
		</div>
	</div>
{/if}
