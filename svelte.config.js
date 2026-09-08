import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Fully static output for GitHub Pages (and any plain file host later).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// GitHub project pages serve from /<repo>. Set BASE_PATH in the deploy
		// workflow; leave it unset for local dev or a root-domain server deploy.
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		prerender: {
			// Several Footer placeholder links point at #services from pages that
			// don't have that section. Warn instead of failing the build.
			handleMissingId: 'warn'
		}
	}
};

export default config;
