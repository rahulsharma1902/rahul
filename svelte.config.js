import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs22.x'
		}),
		// Root-relative asset links: a page's `./_app/…` stylesheet links would point under /maps/ once
		// the app moves to /maps/<slug>, where the Peel's snapdom looks them up (and got a 404).
		paths: { relative: false }
	}
};

export default config;
