# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Style - CRITICAL

**BE BRIEF. BE CONCISE. BE TO THE POINT.**

- No excessive documentation or lengthy summaries
- No verbose explanations unless explicitly asked
- Focus on what matters, skip the noise
- Respect the user's time and attention
- When documenting: essential info only
- When responding: direct answers, no fluff

This applies to both Claude's responses AND any documentation created. Keep it tight.

## Project Overview

Personal website for Harald Franke (haraldfranke.de) - a Nuxt.js 2 static site featuring poetry, photography, and a shop section. Content is managed through Prismic CMS with a slice-based architecture.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Generate static site (nuxt generate)
```

**Note:** There are no tests configured in this project.

## Architecture

### Content Management (Prismic CMS)

Content is fetched from Prismic CMS API endpoint `https://haraldfranke-de.cdn.prismic.io/api/v2`. All content is loaded during SSR in the Vuex store's `nuxtServerInit` action (store/index.js).

**Document Types:**
- `home` - Homepage content
- `page` - Dynamic pages accessible via `/:slug`
- `shop` - Shop page at `/meister-eckart-shop`
- `site_navigation` - Navigation menu structure

### Slice-Based Content System

Content pages are composed of "slices" - modular content blocks defined in Prismic. The slice resolver (util/sliceResolver.js) maps Prismic slice types to Vue components:

- `poem` → components/slices/poem.vue
- `image` → components/slices/full-image.vue
- `gallery` → components/slices/gallery.vue
- `text` → components/slices/text-block.vue

Pages iterate through slices and render the appropriate component for each slice type.

### Routing & Pages

- Static route generation happens in `util/routes.js` (queries all pages from Prismic and generates routes via `linkResolver`)
- `pages/index.vue` - Homepage (renders `home` document)
- `pages/_page/index.vue` - Dynamic page template (renders `page` documents by slug)
- `pages/meister-eckart-shop.vue` - Dedicated shop page
- `pages/preview.vue` - Prismic preview handler

### Vuex Store Architecture

The store (store/index.js) provides getters for accessing CMS content:

- `content` - All Prismic documents
- `home` - Homepage data
- `shop` - Shop page data
- `pages` - All page documents
- `page(slug)` - Get specific page by slug
- `slices(slug)` - Get body/slices for a page (or home if no slug)
- `navigation` - Navigation items
- `navEntries` - Formatted navigation entries with titles and URLs

All content is loaded once during SSR in `nuxtServerInit`.

### Key Utilities

- `util/api.js` - Prismic API client factory
- `util/linkResolver.js` - Maps Prismic document types to URL paths
- `util/sliceResolver.js` - Maps Prismic slice types to Vue components
- `util/routes.js` - Generates static routes for `nuxt generate`

### Component System

Core components (components/index.js):
- `RichText` - Renders Prismic rich text
- `PrismicImage` - Renders Prismic images
- `Slice` - Wrapper that resolves and renders slice components
- `Navigation` - Site navigation

Slice components are in `components/slices/` and registered via `components/slices/index.js`.

### Styling

- Uses SASS/SCSS (node-sass + sass-loader)
- Global styles in `style/global.scss`
- Component-scoped styles in `.vue` files

### Third-Party Services

- **Sentry** - Error tracking (configured in nuxt.config.js)
- **Amplitude** - Analytics (plugin in plugins/amplitude.js, client-side only)
- **vue-pure-lightbox** - Image gallery lightbox component

## Important Notes

- Node version: 12.x (specified in package.json engines)
- The store logs an error if Prismic response has `total_pages > 1`, indicating pagination is not handled
- Preview mode requires Prismic preview endpoint script (loaded in nuxt.config.js head)
- Static generation skips route generation when `NOW_DEPLOYMENT` env var is set (Zeit/Vercel deployment)
