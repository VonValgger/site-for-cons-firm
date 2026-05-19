<script lang="ts">
	import { MoveRight } from '@lucide/svelte';

	const services = [
		{
			id: '01',
			title: 'Uudet Kateratkaisut',
			category: 'Uudiskohteet',
			description: 'Suunnittelemme ja asennamme modernit pelti-, tiili- ja huopakatot vaativiin arkkitehtonisiin kohteisiin.',
			image: 'https://images.unsplash.com/photo-1628744448839-4444a72d1746?q=80&w=2070&auto=format&fit=crop'
		},
		{
			id: '02',
			title: 'Kattoremontit',
			category: 'Saneeraus',
			description: 'Vanhan katon kunnostus pidentää rakennuksen elinkaarta ja nostaa sen arvoa merkittävästi.',
			image: 'https://images.unsplash.com/photo-1626015383917-7a5444983808?q=80&w=2070&auto=format&fit=crop'
		},
		{
			id: '03',
			title: 'Kunnossapito',
			category: 'Huolto',
			description: 'Säännöllinen tarkastus ja puhdistus estävät suuret vauriot ennen kuin ne ehtivät syntyä.',
			image: 'https://images.unsplash.com/photo-1632759162351-140ef403f909?q=80&w=2070&auto=format&fit=crop'
		}
	];
</script>

<section class="py-32 bg-surface" id="services">
	<div class="max-w-7xl mx-auto px-6">
		<div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
			<div class="max-w-2xl">
				<span class="text-sm font-label font-bold tracking-[0.2em] uppercase text-on-primary-container mb-4 block">Asiantuntemus</span>
				<h2 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
					Kattotyöt teollisuuden <br/>tarkkuudella.
				</h2>
			</div>
			<p class="text-xl text-on-surface-variant max-w-md leading-relaxed">
				Tarjoamme kokonaisvaltaista palvelua suunnittelusta viimeiseen listaan. Meille jokainen harja ja jiiri on kunnia-asia.
			</p>
		</div>
		<div class="grid md:grid-cols-3 gap-12">
			{#each services as service}
				<div class="group">
					<div class="h-[450px] overflow-hidden rounded-lg mb-8 relative">
						<img
							alt={service.title}
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							src={service.image}
						/>
						<div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
					</div>
					<span class="text-sm font-bold tracking-[0.1em] text-on-primary-container uppercase">{service.id}. {service.category}</span>
					<h3 class="text-3xl font-headline font-bold mt-3 mb-4">{service.title}</h3>
					<p class="text-on-surface-variant leading-relaxed mb-6">{service.description}</p>
					<a
						class="inline-flex items-center gap-2 font-bold text-on-surface border-b-2 border-on-primary-container pb-1 hover:gap-4 transition-all"
						href="#services"
					>
						Lue lisää <MoveRight size={18} />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
