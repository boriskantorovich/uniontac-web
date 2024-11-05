import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'ua'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // English will be served from the root (/)
  localePrefix: 'as-needed',
  
  // Alternative to localePrefix that gives more fine-grained control
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|ua)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}; 
