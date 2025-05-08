// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://torgestehr.com',
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en'
    }
});
