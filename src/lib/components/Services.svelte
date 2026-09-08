<script lang="ts">
	import { MoveRight } from '@lucide/svelte';
	import { base } from '$app/paths';

	const services = [
		{
			id: '01',
			title: 'Uudet Kateratkaisut',
			category: 'Uudiskohteet',
			description: 'Suunnittelemme ja asennamme modernit pelti-, tiili- ja huopakatot vaativiin arkkitehtonisiin kohteisiin.',
			image: 'https://kevytremppa.fi/images/blog/kotikatto/hero-kattoremontti.webp',
			href: `${base}/palvelut/kateratkaisut`
		},
		{
			id: '02',
			title: 'Kattoremontit',
			category: 'Saneeraus',
			description: 'Vanhan katon kunnostus pidentää rakennuksen elinkaarta ja nostaa sen arvoa merkittävästi.',
			image: 'https://kattokeskus.fi/wp-content/uploads/2023/09/Kattokeskus_Ruukki_Tiilikainen.jpg',
			href: `${base}/palvelut/kattoremontit`
		},
		{
			id: '03',
			title: 'Kunnossapito',
			category: 'Huolto',
			description: 'Säännöllinen tarkastus ja puhdistus estävät suuret vauriot ennen kuin ne ehtivät syntyä.',
			image: 'https://www.ruukki.com/images/default-source/b2c-images/references/renovation/adamante-reference-2.tmb-1920v.jpg?sfvrsn=c0aceb84_38',
			href: '#services'
		}
	];

	const stats = [
		{ label: 'Kokemus', value: '10+', note: 'vuotta kattotöitä Pohjanmaalla' },
		{ label: 'Takuu', value: '25 v', note: 'materiaali- ja työtakuu kohteille' },
		{ label: 'Hinnoittelu', value: 'Kiinteä', note: 'tarjous ilman lisälaskuja' },
		{ label: 'Kartoitus', value: '0 €', note: 'arviokäynti ja kuntoraportti' }
	];
</script>

<section class="py-20 bg-surface" id="services">
	<div class="max-w-[1800px] mx-auto px-16">
		<div class="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-x-20 items-end mb-16">
			<div class="min-w-0">
				<div class="flex items-baseline gap-6 mb-6">
					<span class="text-sm font-label font-bold tracking-[0.2em] uppercase text-on-primary-container">Asiantuntemus</span>
					<span class="text-xs font-medium tracking-[0.2em] uppercase text-on-surface-variant whitespace-nowrap">Palvelut 01 — 03</span>
				</div>
				<h2 class="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] text-balance">
					Kattotyöt teollisuuden tarkkuudella.
				</h2>
			</div>
			<div class="min-w-0 flex flex-col gap-8 pb-2">
				<p class="text-2xl text-on-surface leading-snug text-pretty">
					Tarjoamme kokonaisvaltaista palvelua suunnittelusta viimeiseen listaan. Meille jokainen harja ja jiiri on kunnia-asia.
				</p>
				<p class="text-lg text-on-surface-variant leading-relaxed text-pretty">
					Sama työnjohtaja hoitaa kohteen alusta loppuun: kartoituksesta materiaalivalintoihin, asennuksesta luovutukseen ja takuuseen.
				</p>
				<a
					class="self-start inline-flex items-center gap-3 font-bold text-lg text-on-surface border-b-2 border-on-primary-container pb-1 whitespace-nowrap hover:gap-5 transition-all"
					href="#contact-form"
				>
					Pyydä ilmainen kartoitus <MoveRight size={18} class="shrink-0" />
				</a>
			</div>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-12 mb-20">
			{#each stats as stat}
				<div>
					<span class="block text-xs font-bold uppercase tracking-[0.1em] text-on-primary-container mb-3">{stat.label}</span>
					<span class="block font-headline font-extrabold text-6xl tracking-tighter leading-none">{stat.value}</span>
					<p class="text-on-surface-variant text-base mt-2">{stat.note}</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-12">
			{#each services as service}
				<div class="group">
					<a href={service.href} class="block h-[450px] overflow-hidden rounded-lg mb-8 relative cursor-pointer">
						<img
							alt={service.title}
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							src={service.image}
						/>
						<div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
					</a>
					<span class="text-sm font-bold tracking-[0.1em] text-on-primary-container uppercase">{service.id}. {service.category}</span>
					<h3 class="text-3xl font-headline font-bold mt-3 mb-4">{service.title}</h3>
					<p class="text-on-surface-variant leading-relaxed mb-6">{service.description}</p>
					<a
						class="inline-flex items-center gap-2 font-bold text-on-surface border-b-2 border-on-primary-container pb-1 hover:gap-4 transition-all"
						href={service.href}
					>
						Lue lisää <MoveRight size={18} />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
