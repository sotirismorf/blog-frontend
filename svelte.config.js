//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      default: true
    }
  },

	preprocess: [
    preprocess({
      postcss: true
    })
  ],

	kit: {
		adapter: adapter()
	}
};

export default config;
