<script lang="ts">
	import { Menu } from '@lucide/svelte';
	let { isScrolled = false } = $props();
</script>

<header class="fixed top-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-surface/85 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}">
	<div class="flex justify-between items-center px-6 max-w-7xl mx-auto">
		<div class="text-2xl md:text-3xl font-black tracking-tighter transition-colors {isScrolled ? 'text-on-surface' : 'text-white'}">
			Lassin Laaturemontti Oy
		</div>
		<nav class="hidden md:flex gap-10 items-center">
			<a class="transition-colors font-headline font-bold tracking-tight text-base {isScrolled ? 'text-on-surface-variant hover:text-on-surface' : 'text-white/80 hover:text-white'}" href="#services">Palvelut</a>
			<a class="transition-colors font-headline font-bold tracking-tight text-base {isScrolled ? 'text-on-surface-variant hover:text-on-surface' : 'text-white/80 hover:text-white'}" href="#references">Referenssit</a>
			<a class="transition-colors font-headline font-bold tracking-tight text-base {isScrolled ? 'text-on-surface-variant hover:text-on-surface' : 'text-white/80 hover:text-white'}" href="#about">Meistä</a>
			<a class="transition-colors font-headline font-bold tracking-tight text-base {isScrolled ? 'text-on-surface-variant hover:text-on-surface' : 'text-white/80 hover:text-white'}" href="#contact">Yhteystiedot</a>
			<a class="bg-on-primary-container text-on-primary px-8 py-3 rounded-md font-bold hover:opacity-80 transition-opacity active:scale-95 duration-150 text-base" href="#contact-form">
				Ota Yhteyttä
			</a>
		</nav>
		<button class="md:hidden {isScrolled ? 'text-on-surface' : 'text-white'}">
			<Menu size={24} />
		</button>
	</div>
</header>
