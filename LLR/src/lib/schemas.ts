import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(2, 'Nimi on liian lyhyt'),
	email: z.email('Virheellinen sähköpostiosoite'),
	subject: z.string(),
	message: z.string().min(10, 'Viesti on liian lyhyt')
});

export type ContactSchema = z.infer<typeof contactSchema>;
