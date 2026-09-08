<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		Home,
		ChevronRight,
		ArrowRight,
		Wrench,
		Grid3X3,
		Layers,
		CheckCircle,
		Hammer,
		ShieldCheck,
		Phone
	} from '@lucide/svelte';

	const materials = [
		{
			title: 'Konesaumakatto',
			description: 'Aito konesaumakatto on vesitiiveyden ja kestävyyden huipentuma. Se soveltuu erinomaisesti myös loiville katoille ja vaativiin muotoihin.',
			icon: Wrench,
			features: ['100% Vesitiivis rakenne', 'Pitkäikäinen investointi', 'Huoltovapaa viimeistely'],
			highlighted: false
		},
		{
			title: 'Tiilikatteet',
			description: 'Perinteinen ja hiljainen valinta, joka antaa rakennukselle arvokkaan ilmeen. Betonitiili ja savitiili laajalla värivalikoimalla.',
			icon: Grid3X3,
			features: ['Erinomainen äänieristys', 'Luonnollinen hengittävyys', 'Arkkitehtoninen monipuolisuus'],
			highlighted: true
		},
		{
			title: 'Bitumiratkaisut',
			description: 'Modernit bitumikermit tarjoavat joustavan ja kestävän suojan etenkin monimuotoisille ja loiville kattorakenteille.',
			icon: Layers,
			features: ['Joustava asennus', 'Kevyt mutta kestävä', 'Kustannustehokas valinta'],
			highlighted: false
		}
	];

	const benefits = [
		{
			number: '01',
			title: 'Sertifioitu Laatu',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.'
		},
		{
			number: '02',
			title: 'Takuu Työlle',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.'
		},
		{
			number: '03',
			title: 'Kiinteä Hinnoittelu',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.'
		}
	];
</script>

<Navbar />

<main>
	<!-- Hero Section with Split Layout -->
	<section class="relative min-h-[85vh] w-full flex items-center overflow-hidden">
		<!-- Subtle Background Image -->
		<div class="absolute inset-0 z-0">
			<img
				alt="Taustakuva"
				class="w-full h-full object-cover opacity-15"
				src="https://kattokeskus.fi/wp-content/uploads/2020/08/Ruoteiden-asentaminen-3-scaled.jpg"
			/>
			<div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"></div>
		</div>

		<div class="relative z-10 max-w-[1800px] mx-auto px-16 w-full py-32">
			<!-- Breadcrumb -->
			<nav class="flex items-center gap-2 text-sm font-medium text-white/70 mb-8" aria-label="Breadcrumb">
				<a href="{base}/" class="hover:text-on-primary-container transition-colors flex items-center gap-1">
					<Home size={16} />
					Etusivu
				</a>
				<ChevronRight size={14} class="opacity-40" />
				<span class="text-white">Palvelut</span>
			</nav>

			<!-- Split Layout Grid -->
			<div class="grid grid-cols-12 gap-8 items-center">
				<!-- Left: Text Content -->
				<div class="col-span-12 lg:col-span-7">
					<span class="inline-block px-4 py-1.5 bg-on-primary-container text-on-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">Uudet Kateratkaisut</span>
					<h1 class="font-headline font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter text-white mb-8 drop-shadow-2xl">
						ARKKITEHTONISTA <br /> <span class="text-on-primary-container">SUOJAA</span> JA TYYLIÄ.
					</h1>
					<p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed drop-shadow-lg">
						virman_nimi toteuttaa modernit kattoratkaisut, jotka yhdistävät teollisen kestävyyden ja pohjoismaisen estetiikan. Tarjoamme täydelliset ratkaisut uudisrakentamiseen ja vaativiin saneerauskohteisiin.
					</p>
					<div class="flex flex-wrap gap-4">
						<a href="{base}/#contact-form" class="bg-on-primary-container text-on-primary px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-3 shadow-xl">
							Pyydä Kartoitus <ArrowRight size={20} />
						</a>
						<a href="{base}/#references" class="border-2 border-white text-white backdrop-blur-md px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all">
							Katso Referenssit
						</a>
					</div>
				</div>

				<!-- Right: Prominent Image -->
				<div class="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
					<div class="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative">
						<img
							alt="Moderni kattoremontti"
							class="w-full h-full object-cover"
							src="https://kattokeskus.fi/wp-content/uploads/2023/09/Kattokeskus_Ruukki_Tiilikainen.jpg"
						/>
					</div>
					<!-- Experience Badge -->
					<div class="absolute -bottom-6 -left-6 bg-on-primary-container text-on-primary p-8 hidden md:block shadow-xl">
						<span class="font-headline font-black text-5xl">10+</span>
						<p class="text-xs uppercase tracking-widest font-bold">Vuotta Kokemusta</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Material Choices Section -->
	<section class="bg-surface-container-low py-24 px-16">
		<div class="max-w-[1800px] mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
				<div>
					<h2 class="font-headline font-extrabold text-4xl tracking-tight text-primary uppercase">Materiaalivalinnat</h2>
					<p class="text-on-surface-variant mt-2 max-w-md">Käytämme vain markkinoiden parhaiksi todettuja materiaaleja, jotka on suunniteltu kestämään äärimmäiset sääolosuhteet.</p>
				</div>
				<div class="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
				<div class="text-right">
					<span class="text-6xl font-black text-on-surface/5 font-headline">01</span>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each materials as material}
					<div class="bg-surface-container-lowest p-10 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 {material.highlighted ? 'border-t-4 border-on-primary-container' : ''}">
						<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
							<material.icon size={36} class="text-on-primary-container" />
						</div>
						<h3 class="font-headline font-bold text-2xl mb-4 uppercase tracking-tight">{material.title}</h3>
						<p class="text-on-surface-variant mb-6 leading-relaxed">{material.description}</p>
						<ul class="space-y-3 text-sm font-medium">
							{#each material.features as feature}
								<li class="flex items-center gap-2">
									<CheckCircle size={16} class="text-on-primary-container" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-24 px-16 max-w-[1800px] mx-auto overflow-hidden">
		<div class="grid grid-cols-12 gap-12 items-center">
			<div class="col-span-12 md:col-span-5">
				<div class="relative">
					<div class="absolute -top-12 -left-12 w-64 h-64 bg-on-primary-container/5 rounded-full blur-3xl"></div>
					<h2 class="font-headline font-extrabold text-4xl md:text-5xl tracking-tight text-primary leading-tight mb-8">
						MIKSI virman_nimi?
					</h2>
					<div class="space-y-12">
						{#each benefits as benefit}
							<div class="relative pl-16">
								<span class="absolute left-0 top-0 text-3xl font-black text-on-primary-container/20 font-headline">{benefit.number}</span>
								<h4 class="font-headline font-bold text-xl uppercase tracking-tight mb-2">{benefit.title}</h4>
								<p class="text-on-surface-variant text-sm leading-relaxed">{benefit.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-span-12 md:col-span-7 flex flex-col gap-6">
				<div class="grid grid-cols-2 gap-6">
					<div class="bg-primary p-8 aspect-square flex flex-col justify-end group">
						<Hammer size={36} class="text-on-primary-container mb-4 transition-transform group-hover:scale-110" />
						<div class="text-white font-headline font-black text-3xl uppercase tracking-tighter leading-none">Ammattitaitoinen <br /> Asennus</div>
					</div>
					<div class="bg-surface-container-highest p-8 aspect-square flex flex-col justify-end relative overflow-hidden">
						<img
							alt="Laadukas kattomateriaali"
							class="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
							src="https://kattokeskus.fi/wp-content/uploads/2023/09/Kattokeskus_Ruukki_Tiilikainen.jpg"
						/>
						<ShieldCheck size={36} class="text-on-primary-container mb-4 relative z-10" />
						<div class="text-on-surface font-headline font-black text-3xl uppercase tracking-tighter leading-none relative z-10">Kotimaista <br /> Laatua</div>
					</div>
				</div>
				<div class="bg-on-primary-container p-12 text-on-primary">
					<blockquote class="text-2xl font-headline font-bold italic leading-tight mb-6">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. virman_nimi teki kattoremontin, joka ylitti odotuksemme – kestävä, tyylikäs ja täysin huoltovapaa ratkaisu."
					</blockquote>
					<cite class="not-italic font-label uppercase tracking-widest text-sm opacity-80">— Matti S., Omakotitalon omistaja</cite>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-primary py-24 px-16 text-center overflow-hidden relative">
		<div class="absolute inset-0 opacity-10 pointer-events-none">
			<div class="h-full w-full flex flex-wrap gap-1">
				<div class="w-20 h-20 border-r border-b border-white/20"></div>
				<div class="w-20 h-20 border-r border-b border-white/20"></div>
				<div class="w-20 h-20 border-r border-b border-white/20"></div>
			</div>
		</div>
		<div class="max-w-3xl mx-auto relative z-10">
			<h2 class="font-headline font-black text-5xl md:text-7xl text-white mb-8 tracking-tighter uppercase">
				ALOITETAANKO <br /> <span class="text-on-primary-container">PROJEKTI?</span>
			</h2>
			<p class="text-white/60 text-lg mb-12 max-w-xl mx-auto">
				Ota yhteyttä ja tilaa ilmainen katon kuntotarkastus. Asiantuntijamme auttaa valitsemaan kotiisi parhaiten sopivan ratkaisun.
			</p>
			<div class="flex flex-col md:flex-row justify-center gap-6">
				<a href="tel:+358123456789" class="bg-on-primary-container text-on-primary px-10 py-5 rounded-md font-headline font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3">
					<Phone size={20} />
					Soita Heti
				</a>
				<a href="{base}/#contact-form" class="bg-white text-primary px-10 py-5 rounded-md font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors flex items-center justify-center gap-3">
					Pyydä Tarjous
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />
