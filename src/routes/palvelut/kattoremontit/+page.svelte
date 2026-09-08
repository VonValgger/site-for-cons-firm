<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		Home,
		ChevronRight,
		ArrowRight,
		ShieldCheck,
		Heart,
		Leaf,
		Star,
		Phone
	} from '@lucide/svelte';

	const benefits = [
		{
			icon: ShieldCheck,
			title: 'Arvon Säilyttäminen',
			description: 'Katto muodostaa suuren osan talon ensivaikutelmasta ja kunnosta. Uusi, teknisesti oikein toteutettu katto on sijoitus, joka maksaa itsensä takaisin kiinteistön arvonnousuna.'
		},
		{
			icon: Heart,
			title: 'Rakenteellinen Turva',
			description: 'Pienikin vuoto voi aiheuttaa valtavia vahinkoja rakenteille. Kattoremontti varmistaa, että kotisi pysyy kuivana ja terveellisenä vuosikymmeniä eteenpäin.'
		},
		{
			icon: Leaf,
			title: 'Energiatehokkuus',
			description: 'Nykyaikaiset materiaalit ja oikeaoppinen eristys kattoremontin yhteydessä pienentävät lämmityskustannuksia ja parantavat asumismukavuutta.'
		}
	];

	const processSteps = [
		{
			number: '01',
			title: 'Kuntoarvio',
			description: 'Ilmainen ja perusteellinen tarkastus, jossa kartoitamme katon nykyisen tilan ja korjaustarpeet.'
		},
		{
			number: '02',
			title: 'Suunnittelu',
			description: 'Valitsemme kohteeseen parhaiten sopivat materiaalit ja laadimme tarkan, pitävän kustannusarvion.'
		},
		{
			number: '03',
			title: 'Toteutus',
			description: 'Ammattitaitoiset asentajamme hoitavat remontin sovitussa aikataulussa, turvallisuudesta tinkimättä.'
		},
		{
			number: '04',
			title: 'Luovutus',
			description: 'Lopputarkastus kanssasi, takuutodistusten luovutus ja työmaan huolellinen siivous.'
		}
	];

	const testimonials = [
		{
			quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis',
			author: 'John Doe, Espoo'
		},
		{
			quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis',
			author: 'John Doe, Vantaa'
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
				class="w-full h-full object-cover opacity-25"
				src="https://kattokeskus.fi/wp-content/uploads/2020/08/Ruoteiden-asentaminen-3-scaled.jpg"
			/>
			<div class="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-on-primary-container/20"></div>
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
					<span class="inline-block px-4 py-1.5 bg-on-primary-container text-on-primary text-sm font-bold tracking-[0.2em] uppercase mb-8">Kattoremontit</span>
					<h1 class="font-headline font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter text-white mb-8 drop-shadow-2xl">
						RAKENNUKSEN <br /> <span class="text-on-primary-container">ARVOKAS</span> SUOJA.
					</h1>
					<p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed drop-shadow-lg">
						Ammattitaitoinen kattoremontti ei ainoastaan suojaa rakennustasi sääolosuhteilta, vaan pidentää merkittävästi sen elinkaarta ja nostaa kiinteistön jälleenmyyntiarvoa.
					</p>
					<div class="flex flex-wrap gap-4">
						<a href="{base}/#contact-form" class="bg-on-primary-container text-on-primary px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-3 shadow-xl">
							Pyydä Kartoitus <ArrowRight size={20} />
						</a>
						<a href="#process" class="border-2 border-white text-white backdrop-blur-md px-10 py-5 rounded-md font-headline font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all">
							Lue lisää
						</a>
					</div>
				</div>

				<!-- Right: Prominent Image -->
				<div class="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
					<div class="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative">
						<img
							alt="Kattoremontti työssä"
							class="w-full h-full object-cover"
							src="https://www.ruukki.com/images/default-source/b2c-images/references/renovation/adamante-reference-2.tmb-1920v.jpg?sfvrsn=c0aceb84_38"
						/>
					</div>
					<!-- Experience Badge -->
					<div class="absolute -bottom-6 -left-6 bg-on-primary-container text-on-primary p-8 hidden md:block shadow-xl">
						<span class="font-headline font-black text-5xl">25+</span>
						<p class="text-xs uppercase tracking-widest font-bold">Vuoden Takuu</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Value Proposition Section -->
	<section class="bg-surface py-16 px-16">
		<div class="max-w-[1800px] mx-auto">
			<div class="grid lg:grid-cols-2 gap-20 items-start">
				<div>
					<h2 class="font-headline text-3xl font-bold tracking-tight mb-8">MIKSI KATTO ON KIINTEISTÖN TÄRKEIN OSA?</h2>
					<div class="space-y-12">
						{#each benefits as benefit}
							<div class="group">
								<h3 class="font-headline text-xl font-bold mb-3 flex items-center gap-3">
									<benefit.icon size={24} class="text-on-primary-container" />
									{benefit.title}
								</h3>
								<p class="text-on-surface-variant leading-relaxed">
									{benefit.description}
								</p>
							</div>
						{/each}
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="aspect-[3/4] bg-surface-container-high rounded-md overflow-hidden mt-8">
						<img class="w-full h-full object-cover" alt="Kattotiilien asennus" src="https://kattokeskus.fi/wp-content/uploads/2023/09/Kattokeskus_Ruukki_Tiilikainen.jpg" />
					</div>
					<div class="aspect-[3/4] bg-surface-container-high rounded-md overflow-hidden">
						<img class="w-full h-full object-cover" alt="Kattorakenne" src="https://kevytremppa.fi/images/blog/kotikatto/hero-kattoremontti.webp" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section id="process" class="bg-surface-container-low py-16 px-16 overflow-hidden">
		<div class="max-w-[1800px] mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<h2 class="font-headline text-5xl font-black tracking-tight max-w-lg leading-tight">PROSESSI INSPEKTIOSTA VIIMEISTELYYN.</h2>
				<p class="font-label text-sm uppercase tracking-widest text-on-surface-variant max-w-xs border-l-2 border-on-primary-container pl-4">Asiantuntemusta jokaisessa kerroksessa.</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20">
				{#each processSteps as step}
					<div class="bg-surface p-10 hover:bg-surface-container-highest transition-colors cursor-default">
						<span class="text-6xl font-black text-on-primary-container/40 block mb-6">{step.number}</span>
						<h4 class="font-headline font-bold text-xl mb-4 uppercase">{step.title}</h4>
						<p class="text-on-surface-variant text-base leading-relaxed">{step.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-32 px-16 bg-surface">
		<div class="max-w-[1800px] mx-auto">
			<div class="grid lg:grid-cols-3 gap-12">
				<div class="lg:col-span-1">
					<h2 class="font-headline text-4xl font-extrabold mb-6">LUOTTAMUS <br />RAKENNETAAN <br />LAADULLA.</h2>
					<div class="h-1 w-20 bg-on-primary-container"></div>
				</div>
				<div class="lg:col-span-2 grid md:grid-cols-2 gap-8">
					{#each testimonials as testimonial}
						<div class="bg-surface-container-lowest p-8 border-l-4 border-on-primary-container">
							<div class="flex gap-1 text-on-primary-container mb-4">
								{#each Array(5) as _}
									<Star size={20} fill="currentColor" />
								{/each}
							</div>
							<p class="font-body italic mb-6 text-on-surface leading-relaxed">"{testimonial.quote}"</p>
							<span class="font-label text-xs font-bold uppercase tracking-widest">— {testimonial.author}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-primary py-24 px-16 relative overflow-hidden">
		<div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-on-primary-container to-transparent"></div>
		<div class="max-w-4xl mx-auto text-center relative z-10">
			<h2 class="text-white font-headline text-4xl md:text-5xl font-black mb-8">ALOITETAANKO TEIDÄN KATTONNE UUSI ELINKAARI?</h2>
			<p class="text-white/60 text-lg mb-12 max-w-2xl mx-auto">Ota yhteyttä ja tilaa asiantuntijamme ilmaiselle arviokäynnille. Ei sitoumuksia, vain rehellistä ammattitaitoa.</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="{base}/#contact-form" class="bg-on-primary-container text-on-primary px-12 py-5 rounded-md font-bold text-xl hover:opacity-90 transition-colors flex items-center justify-center gap-3">
					Varaa Kartoituskäynti <ArrowRight size={20} />
				</a>
				<a href="tel:+358123456789" class="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-md font-bold text-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-3">
					<Phone size={20} />
					Soita Meille
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />
