<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { parallax } from '$lib/actions/parallax';
</script>

<section class="py-20 bg-surface" id="about">
	<div class="max-w-[1800px] mx-auto px-16">
		<div class="grid md:grid-cols-2 gap-24 items-center">
			<div class="relative">
				<div class="rounded-lg shadow-2xl overflow-hidden aspect-[8/5]" use:reveal={{ variant: 'image' }}>
					<img
						use:parallax
						alt="Laadukas Työnjälki"
						class="w-full h-full object-cover"
						loading="lazy"
						decoding="async"
						src="https://www.kpedu.fi/images/default-source/kpedu-stories-osio/sameli-tuohisto-kokko-ja-lassi-salmela.tmb-hero_image.jpg?Culture=fi&sfvrsn=e01ed54d_2"
					/>
				</div>
				<div class="absolute -bottom-5 -right-10 bg-on-primary-container p-12 hidden lg:block shadow-2xl" use:reveal={{ delay: 450 }}>
					<div class="text-white text-6xl font-black mb-2">10+</div>
					<div class="text-white/85 font-medium text-lg">vuoden kokemus</div>
				</div>
			</div>
			<div>
				<h2 class="text-5xl font-headline font-extrabold mb-6 tracking-tight" use:reveal>Vakaa kuin peruskallio.</h2>
				<p class="text-xl text-on-surface-variant leading-relaxed mb-8" use:reveal={{ delay: 100 }}>
					Olemme tehneet kattoja Pohjanmaalla yli kymmenen vuotta. Jokaisella kohteella on yksi työnjohtaja kartoituksesta luovutukseen, ja hinta sovitaan kiinteänä ennen kuin työ alkaa. Tiedät aina, kuka vastaa katostasi ja mitä se maksaa.
				</p>
				<div class="space-y-8">
					<div class="flex items-start gap-8" use:reveal={{ delay: 200 }}>
						<span class="text-6xl font-black text-on-primary-container">01</span>
						<div>
							<h4 class="text-2xl font-bold mb-2">Kartoitus</h4>
							<p class="text-on-surface-variant">Ilmainen arviokäynti ja tarkka analyysi katon nykytilasta.</p>
						</div>
					</div>
					<div class="flex items-start gap-8" use:reveal={{ delay: 300 }}>
						<span class="text-6xl font-black text-on-primary-container">02</span>
						<div>
							<h4 class="text-2xl font-bold mb-2">Toteutus</h4>
							<p class="text-on-surface-variant">Sujuva ja siisti asennus sovitussa aikataulussa.</p>
						</div>
					</div>
					<div class="flex items-start gap-8" use:reveal={{ delay: 400 }}>
						<span class="text-6xl font-black text-on-primary-container">03</span>
						<div>
							<h4 class="text-2xl font-bold mb-2">Takuu</h4>
							<p class="text-on-surface-variant">Alan pisimmät materiaali- ja työtakuut kaikille kohteille.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
