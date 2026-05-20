<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative h-screen w-full flex items-center overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img
			alt="Laadukas katto"
			class="w-full h-full object-cover"
			src="https://kattokeskus.fi/wp-content/uploads/2020/08/Ruoteiden-asentaminen-3-scaled.jpg"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
	</div>
	<div class="relative z-10 max-w-[1800px] mx-auto px-16 w-full py-20">
		<div class="max-w-4xl">
			<span class="inline-block px-4 py-1.5 bg-on-primary-container text-on-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">
				Ei Eteläistä Vaan Aitoa pohjalaasta Ammattitaitoa
			</span>
			<h1 class="text-7xl md:text-9xl font-headline font-extrabold text-white tracking-tighter leading-[0.85] mb-10 drop-shadow-2xl">
				Katto laadun päällä.
			</h1>
			<p class="text-xl md:text-3xl text-white font-medium max-w-2xl mb-14 leading-relaxed drop-shadow-lg opacity-95">
				Lassin Laaturemontti Oy toteuttaa kestävät ja tyylikkäät kattoratkaisut yli vuosikymmenen kokemuksella. Rakennamme suojaa, joka kestää sukupolvelta toiselle.
			</p>
			<div class="flex flex-wrap gap-6">
				<a
					class="bg-on-primary-container text-on-primary px-12 py-6 rounded-md font-bold text-xl hover:bg-primary-container transition-all flex items-center gap-3 shadow-xl"
					href="#contact-form"
				>
					Pyydä Tarjous
					<ArrowRight size={24} />
				</a>
				<a
					class="border-2 border-white text-white backdrop-blur-md px-12 py-6 rounded-md font-bold text-xl hover:bg-white hover:text-primary transition-all"
					href="#services"
				>
					Palvelumme
				</a>
			</div>
		</div>
	</div>
</section>
