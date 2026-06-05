<script lang="ts">
	import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from '@lucide/svelte';

	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	let statusMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});

			const data = await response.json();

			if (data.success) {
				submitStatus = 'success';
				statusMessage = 'Viesti lähetetty! Otamme yhteyttä pian.';
				form.reset();
			} else {
				submitStatus = 'error';
				statusMessage = 'Viestin lähetys epäonnistui. Yritä uudelleen.';
			}
		} catch {
			submitStatus = 'error';
			statusMessage = 'Verkkovirhe. Tarkista yhteys ja yritä uudelleen.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section class="py-20 bg-primary" id="contact-form">
	<div class="max-w-[1800px] mx-auto px-16">
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
				<form class="space-y-6" onsubmit={handleSubmit}>
					<input type="hidden" name="access_key" value="94d3b768-68fc-4527-877f-2a597a0f5027" />
					<input type="hidden" name="subject" value="Uusi yhteydenotto - Lassin Laaturemontti" />
					<input type="hidden" name="from_name" value="Lassin Laaturemontti Nettisivu" />

					<div class="grid md:grid-cols-2 gap-6">
						<div class="relative">
							<label for="name" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Nimi</label>
							<input
								id="name"
								name="name"
								class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 text-lg rounded-t-md"
								placeholder="Matti Meikäläinen"
								type="text"
								required
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
								required
							/>
						</div>
					</div>
					<div class="relative">
						<label for="topic" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Aihe</label>
						<select
							id="topic"
							name="topic"
							class="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 appearance-none text-lg rounded-t-md"
							required
						>
							<option value="Uusi Katto">Uusi Katto</option>
							<option value="Kattoremontti">Kattoremontti</option>
							<option value="Huolto ja Puhdistus">Huolto ja Puhdistus</option>
							<option value="Muu kysymys">Muu kysymys</option>
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
							required
						></textarea>
					</div>

					{#if submitStatus !== 'idle'}
						<div class="flex items-center gap-3 p-4 rounded-md {submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
							{#if submitStatus === 'success'}
								<CheckCircle size={20} />
							{:else}
								<AlertCircle size={20} />
							{/if}
							<span class="font-medium">{statusMessage}</span>
						</div>
					{/if}

					<button
						class="w-full bg-on-primary-container text-on-primary py-5 rounded-md font-bold text-xl hover:opacity-90 transition-opacity active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Lähetetään...' : 'Lähetä Viesti'}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
