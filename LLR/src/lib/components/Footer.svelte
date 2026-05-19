<script lang="ts">
	import { Globe, Share2 } from '@lucide/svelte';
</script>

<footer class="bg-slate-900 border-t border-slate-800">
	<div class="flex flex-col md:flex-row justify-between items-center px-8 py-16 gap-8 w-full max-w-7xl mx-auto">
		<div class="flex flex-col items-center md:items-start gap-4">
			<span class="text-2xl md:text-3xl font-black text-white">Lassin Laaturemontti Oy</span>
			<p class="font-body text-base leading-relaxed text-slate-400 text-center md:text-left">
				© 2024 Lassin Laaturemontti Oy. Kaikki oikeudet pidätetään.
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-6 md:gap-10">
			<a class="text-slate-400 hover:text-white transition-colors font-body text-base" href="#services">Tietosuojaseloste</a>
			<a class="text-slate-400 hover:text-white transition-colors font-body text-base" href="#services">Toimitusehdot</a>
			<a class="text-slate-400 hover:text-white transition-colors font-body text-base" href="#services">UKK</a>
		</div>
		<div class="flex gap-8">
			<a class="text-slate-400 hover:text-white transition-all hover:scale-110" href="#services">
				<Globe size={24} />
			</a>
			<a class="text-slate-400 hover:text-white transition-all hover:scale-110" href="#services">
				<Share2 size={24} />
			</a>
		</div>
	</div>
</footer>
