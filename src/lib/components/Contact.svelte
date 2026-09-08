<script lang="ts">
	import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from '@lucide/svelte';

	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let message = $state('');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		status = 'submitting';

		const formData = new FormData(event.target as HTMLFormElement);
		const email = formData.get('email') as string;

		// Check for forbidden characters in email
		if (/[äöÄÖ]/.test(email)) {
			status = 'error';
			message = 'Sähköpostiosoite ei saa sisältää ääkkösiä (ä tai ö).';
			return;
		}

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});
			const result = await response.json();
			if (result.success) {
				status = 'success';
				message = 'Viesti lähetetty onnistuneesti! Otamme yhteyttä pian.';
				(event.target as HTMLFormElement).reset();
				
				// Reset status after 5 seconds to allow new submissions
				setTimeout(() => {
					status = 'idle';
				}, 5000);
			} else {
				status = 'error';
				message = result.message || 'Lähetys epäonnistui. Yritä uudelleen.';
			}
		} catch (error) {
			status = 'error';
			message = 'Verkkovirhe. Tarkista yhteys ja yritä uudelleen.';
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
				{#if status === 'success'}
					<div class="absolute inset-0 bg-surface/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
						<CheckCircle2 size={80} class="text-green-500 mb-6" />
						<h3 class="text-3xl font-bold mb-4 text-on-surface">Kiitos yhteydenotosta!</h3>
						<p class="text-on-surface-variant text-lg max-w-xs">{message}</p>
						<button 
							onclick={() => status = 'idle'}
							class="mt-8 text-on-primary-container font-bold hover:underline"
						>
							Lähetä uusi viesti
						</button>
					</div>
				{/if}

				<form onsubmit={handleSubmit} class="space-y-6">
					<input type="hidden" name="access_key" value="94d3b768-68fc-4527-877f-2a597a0f5027" />
					<input type="hidden" name="subject" value="Uusi yhteydenotto - virman_nimi" />
					<input type="hidden" name="from_name" value="virman_nimi Nettisivu" />
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
								disabled={status === 'submitting'}
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
								disabled={status === 'submitting'}
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
							disabled={status === 'submitting'}
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
							disabled={status === 'submitting'}
						></textarea>
					</div>

					{#if status === 'error'}
						<p class="text-red-500 text-sm font-bold">{message}</p>
					{/if}

					<button
						class="w-full bg-on-primary-container text-on-primary py-5 rounded-md font-bold text-xl hover:opacity-90 transition-opacity active:scale-95 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
						type="submit"
						disabled={status === 'submitting'}
					>
						{#if status === 'submitting'}
							<Loader2 class="animate-spin" size={24} />
							Lähetetään...
						{:else}
							Lähetä Viesti
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

