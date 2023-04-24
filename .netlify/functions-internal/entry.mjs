import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { defineComponent, h, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { s as server_default, e as deserializeManifest } from './chunks/astro.2a5cf046.mjs';
import { _ as _page0 } from './chunks/prerender.4dca8a99.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';

const setup = () => {};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
	},
	setup({ name, value }) {
		if (!value) return () => null;
		return () => h('astro-slot', { name, innerHTML: value });
	},
});

function check(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () => h(StaticHtml, { value, name: key === 'default' ? undefined : key });
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	await setup();
	const html = await renderToString(app);
	return { html };
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/bencooper/Documents/rotate/www/astro-vue-test/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@astrojs/vue/client.js":"_astro/client.dd3814e6.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/client.dd3814e6.js","/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
