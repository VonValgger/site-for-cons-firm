<script lang="ts">
	import { Menu } from '@lucide/svelte';
</script>

<style>
	.glass-nav {
		background: rgba(247, 250, 252, 0.85);
		backdrop-filter: blur(12px);
	}
</style>

<header class="fixed top-0 w-full z-50 glass-nav shadow-sm">
	<div class="flex justify-between items-center px-12 py-5 max-w-[1800px] mx-auto">
		<div class="text-3xl font-black tracking-tighter text-slate-900">
			Lassin Laaturemontti Oy
		</div>
		<nav class="hidden md:flex gap-10 items-center">
			<a class="text-slate-700 hover:text-slate-900 transition-colors font-headline font-extrabold tracking-tight text-lg" href="/#services">Palvelut</a>
			<a class="text-slate-700 hover:text-slate-900 transition-colors font-headline font-extrabold tracking-tight text-lg" href="/#references">Referenssit</a>
			<a class="text-slate-700 hover:text-slate-900 transition-colors font-headline font-extrabold tracking-tight text-lg" href="/#about">Meistä</a>
			<a class="text-slate-700 hover:text-slate-900 transition-colors font-headline font-extrabold tracking-tight text-lg" href="/#contact">Yhteystiedot</a>
			<a class="bg-on-primary-container text-on-primary px-8 py-3 rounded-md font-extrabold hover:opacity-80 transition-opacity active:scale-95 duration-150 text-lg" href="/#contact-form">
				Ota Yhteyttä
			</a>
		</nav>
		<button class="md:hidden text-on-surface">
			<Menu size={24} />
		</button>
	</div>
</header>
