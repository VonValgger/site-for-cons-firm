import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from '$lib/schemas';

export const load = async () => {
	const form = await superValidate(zod(contactSchema as any));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema as any));

		if (!form.valid) {
			return fail(400, { form });
		}

		// TODO: Implement email sending logic here
		console.log('Form data:', form.data);

		return { form };
	}
};
