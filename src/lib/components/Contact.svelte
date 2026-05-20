<script lang="ts">
	import { Phone, Mail, MapPin } from '@lucide/svelte';
</script>

<section class="py-20 bg-primary" id="contact-form">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-20">
			<div class="text-white">
				<h2 class="text-5xl md:text-6xl font-headline font-extrabold mb-8">Aloitetaan projekti jo tänään.</h2>
				<p class="text-slate-400 text-xl mb-10 leading-relaxed max-w-md">
					Jätä meille viesti tai soita suoraan. Vastaamme kaikkiin kyselyihin 24 tunnin sisällä.
				</p>
				<div class="space-y-6" id="contact">
					<div class="flex items-center gap-6">
						<div class="w-14 h-14 bg-on-primary-container rounded-md flex items-center justify-center">
							<Phone size={28} class="text-white" />
						</div>
						<div>
							<p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Puhelin</p>
							<p class="text-xl md:text-2xl font-bold">+358 11 111 1111</p>
						</div>
					</div>
					<div class="flex items-center gap-6">
						<div class="w-14 h-14 bg-on-primary-container rounded-md flex items-center justify-center">
							<Mail size={28} class="text-white" />
						</div>
						<div>
							<p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Sähköposti</p>
							<p class="text-xl md:text-2xl font-bold">myynti@kattoura.fi</p>
						</div>
					</div>
					<div class="flex items-center gap-6">
						<div class="w-14 h-14 bg-on-primary-container rounded-md flex items-center justify-center">
							<MapPin size={28} class="text-white" />
						</div>
						<div>
							<p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Toimipiste</p>
							<p class="text-xl md:text-2xl font-bold">Kattokuja 4, 00100 Helsinki</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-surface p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden">
				<form class="space-y-6" onsubmit={(e) => e.preventDefault()}>
					<div class="grid md:grid-cols-2 gap-6">
						<div class="relative">
							<label for="name" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Nimi</label>
							<input
								id="name"
								name="name"
								class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 text-lg rounded-t-md"
								placeholder="Matti Meikäläinen"
								type="text"
							/>
						</div>
						<div class="relative">
							<label for="email" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Sähköposti</label>
							<input
								id="email"
								name="email"
								class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 text-lg rounded-t-md"
								placeholder="matti@yritys.fi"
								type="email"
							/>
						</div>
					</div>
					<div class="relative">
						<label for="subject" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Aihe</label>
						<select
							id="subject"
							name="subject"
							class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 appearance-none text-lg rounded-t-md"
						>
							<option>Uusi Katto</option>
							<option>Kattoremontti</option>
							<option>Huolto ja Puhdistus</option>
							<option>Muu kysymys</option>
						</select>
					</div>
					<div class="relative">
						<label for="message" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Viesti</label>
						<textarea
							id="message"
							name="message"
							class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 resize-none text-lg rounded-t-md"
							placeholder="Kerro lyhyesti kohteestasi..."
							rows="5"
						></textarea>
					</div>
					<button
						class="w-full bg-on-primary-container text-on-primary py-5 rounded-md font-bold text-xl hover:opacity-90 transition-opacity active:scale-95 shadow-lg"
						type="submit"
					>
						Lähetä Viesti
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
