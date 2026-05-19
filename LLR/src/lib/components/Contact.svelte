<script lang="ts">
	import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactSchema } from '$lib/schemas';
	
	let { form: formProps } = $props();

	const { form, errors, constraints, enhance, delayed, posted } = superForm(formProps, {
		validators: zodClient(contactSchema as any),
		resetForm: true
	});
</script>

<section class="py-32 bg-primary" id="contact-form">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-20">
			<div class="text-white">
				<h2 class="text-5xl md:text-6xl font-headline font-extrabold mb-8">Aloitetaan projekti jo tänään.</h2>
				<p class="text-slate-400 text-xl mb-16 leading-relaxed max-w-md">
					Jätä meille viesti tai soita suoraan. Vastaamme kaikkiin kyselyihin 24 tunnin sisällä.
				</p>
				<div class="space-y-10" id="contact">
					<div class="flex items-center gap-6">
						<div class="w-14 h-14 bg-on-primary-container rounded-md flex items-center justify-center">
							<Phone size={28} class="text-white" />
						</div>
						<div>
							<p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Puhelin</p>
							<p class="text-xl md:text-2xl font-bold">+358 40 123 4567</p>
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
				{#if $posted}
					<div class="absolute inset-0 bg-surface/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500">
						<CheckCircle2 size={80} class="text-on-primary-container mb-6" />
						<h3 class="text-3xl font-headline font-bold mb-4">Viesti lähetetty!</h3>
						<p class="text-on-surface-variant text-lg">Kiitos yhteydenotostasi. Palaamme asiaan mahdollisimman pian.</p>
						<button 
							onclick={() => window.location.reload()} 
							class="mt-8 text-on-primary-container font-bold border-b-2 border-on-primary-container pb-1"
						>
							Lähetä uusi viesti
						</button>
					</div>
				{/if}

				<form method="POST" use:enhance class="space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div class="relative">
							<label for="name" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Nimi</label>
							<input
								id="name"
								name="name"
								bind:value={$form.name}
								{...$constraints.name}
								class="w-full bg-surface-container-highest border-0 border-b-2 {$errors.name ? 'border-error' : 'border-transparent'} focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 text-lg rounded-t-md"
								placeholder="Matti Meikäläinen"
								type="text"
							/>
							{#if $errors.name}
								<span class="text-error text-xs font-bold mt-1">{$errors.name}</span>
							{/if}
						</div>
						<div class="relative">
							<label for="email" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Sähköposti</label>
							<input
								id="email"
								name="email"
								bind:value={$form.email}
								{...$constraints.email}
								class="w-full bg-surface-container-highest border-0 border-b-2 {$errors.email ? 'border-error' : 'border-transparent'} focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 text-lg rounded-t-md"
								placeholder="matti@yritys.fi"
								type="email"
							/>
							{#if $errors.email}
								<span class="text-error text-xs font-bold mt-1">{$errors.email}</span>
							{/if}
						</div>
					</div>
					<div class="relative">
						<label for="subject" class="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Aihe</label>
						<select
							id="subject"
							name="subject"
							bind:value={$form.subject}
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
							bind:value={$form.message}
							{...$constraints.message}
							class="w-full bg-surface-container-highest border-0 border-b-2 {$errors.message ? 'border-error' : 'border-transparent'} focus:border-on-primary-container focus:ring-0 py-4 transition-all px-4 resize-none text-lg rounded-t-md"
							placeholder="Kerro lyhyesti kohteestasi..."
							rows="5"
						></textarea>
						{#if $errors.message}
							<span class="text-error text-xs font-bold mt-1">{$errors.message}</span>
						{/if}
					</div>
					<button
						class="w-full bg-on-primary-container text-on-primary py-5 rounded-md font-bold text-xl hover:opacity-90 transition-opacity active:scale-95 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
						type="submit"
						disabled={$delayed}
					>
						{#if $delayed}
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
