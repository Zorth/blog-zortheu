// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import wikiLink from 'remark-wiki-link';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.zorth.eu',
	output: 'static',
	integrations: [mdx(), sitemap(), vercel()],
	markdown: {
		remarkPlugins: [
			[
				wikiLink,
				{
					aliasDivider: '|',
					hrefTemplate: (permalink) => {
						if (permalink.startsWith('#')) return permalink.toLowerCase().replace(/[ _]/g, '-');
						return `/blog/${permalink}`;
					},
				},
			],
		],
	},
});
