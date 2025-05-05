import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getNewUrl(currentLang: keyof typeof ui, newLang: keyof typeof ui, url: URL) {
    const newUrl = url.pathname.replace(defaultLang === currentLang ? '/' : `/${currentLang}`, defaultLang === newLang ? '' : url.pathname === '/' ? `/${newLang}` : `/${newLang}/`);
    return newUrl !== '' ? newUrl : '/';
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function useLocalLink(lang: keyof typeof ui) {
    return function link(path: string) {
        if (lang === defaultLang) return path;
        else return `/${lang}${path}`;
    };
}
