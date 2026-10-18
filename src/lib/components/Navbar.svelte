<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu } from '@lucide/svelte';
	import { base } from '$app/paths';

	// overlay: start transparent over a dark hero (#hero) and turn solid once past it.
	let { overlay = false }: { overlay?: boolean } = $props();

	let pastHero = $state(false);
	let hidden = $state(false);
	const solid = $derived(!overlay || pastHero);

	onMount(() => {
		const hero = document.getElementById('hero');
		// Scroll distance needed before the header reacts, so small wheel jitters don't toggle it.
		const SHOW_AFTER = 48;
		const HIDE_AFTER = 24;
		let lastY = window.scrollY;
		let direction = 0;
		let travel = 0;
		let raf = 0;

		const update = () => {
			raf = 0;
			const y = window.scrollY;
			const dy = y - lastY;
			lastY = y;
			pastHero = hero ? y > hero.offsetTop + hero.offsetHeight - 96 : y > 0;

			if (dy !== 0) {
				const dir = Math.sign(dy);
				if (dir !== direction) {
					direction = dir;
					travel = 0;
				}
				travel += Math.abs(dy);
			}
			if (y <= 120) hidden = false;
			else if (direction > 0 && travel > HIDE_AFTER) hidden = true;
			else if (direction < 0 && travel > SHOW_AFTER) hidden = false;
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		// SmoothScroll asks for the header back after an anchor jump lands.
		const show = () => {
			hidden = false;
			travel = 0;
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('navbar:show', show);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('navbar:show', show);
		};
	});

	const links = [
		{ href: `${base}/#services`, label: 'Palvelut' },
		{ href: `${base}/#references`, label: 'Referenssit' },
		{ href: `${base}/#about`, label: 'Meistä' },
		{ href: `${base}/#contact`, label: 'Yhteystiedot' }
	];
</script>

<header
	class="fixed top-0 w-full z-50 transition-[background-color,box-shadow,backdrop-filter,transform,opacity] focus-within:translate-y-0 focus-within:opacity-100
		{solid ? 'bg-surface/85 backdrop-blur-md shadow-sm' : 'bg-transparent'}
		{hidden ? '-translate-y-full opacity-0 duration-400 ease-in-quint' : 'translate-y-0 opacity-100 duration-700 ease-out-quint'}"
>
	<div class="flex justify-between items-center px-12 py-5 max-w-[1800px] mx-auto">
		<a
			class="text-3xl font-black tracking-tighter transition-colors duration-500 ease-out-expo {solid ? 'text-slate-900' : 'text-white'}"
			href="{base}/"
		>
			virman_nimi
		</a>
		<nav class="hidden md:flex gap-10 items-center">
			{#each links as link}
				<a
					class="relative font-headline font-extrabold tracking-tight text-lg transition-colors duration-500 ease-out-expo after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-on-primary-container after:transition-transform after:duration-500 after:ease-out-expo hover:after:scale-x-100
						{solid ? 'text-slate-700 hover:text-slate-900' : 'text-white/85 hover:text-white'}"
					href={link.href}
				>
					{link.label}
				</a>
			{/each}
			<a
				class="bg-on-primary-container text-on-primary px-8 py-3 rounded-md font-extrabold text-lg transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
				href="{base}/#contact-form"
			>
				Ota Yhteyttä
			</a>
		</nav>
		<button class="md:hidden transition-colors duration-500 {solid ? 'text-on-surface' : 'text-white'}">
			<Menu size={24} />
		</button>
	</div>
</header>
