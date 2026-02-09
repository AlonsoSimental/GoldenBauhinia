import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Button from './Button.jsx';

const Navbar = ({ routes }) => {
  const { locale, setLocale } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="min-w-0 flex items-center gap-3" aria-label={restaurant.identity.name}>
          <img
            src={restaurant.images.logo.src}
            alt={restaurant.images.logo.alt}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="hidden text-sm uppercase tracking-[0.2em] text-neutral/70 sm:block">{restaurant.identity.type}</p>
            <p className="truncate text-base font-semibold text-neutral sm:text-lg">{restaurant.identity.name}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral/80 lg:flex">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `transition hover:text-accent ${isActive ? 'text-accent' : ''}`
              }
            >
              {getFallback(locale, route.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral/20 text-neutral lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3.5 5.5H16.5M3.5 10H16.5M3.5 14.5H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
          <label className="sr-only" htmlFor="language-select">
            {getFallback(locale, 'labels.language')}
          </label>
          <select
            id="language-select"
            className="rounded-full border border-neutral/20 bg-cream px-2 py-2 text-xs font-semibold uppercase tracking-wide sm:px-3"
            value={locale}
            onChange={(event) => setLocale(event.target.value)}
          >
            {restaurant.languages.map((language) => (
              <option key={language} value={language}>
                {language.toUpperCase()}
              </option>
            ))}
          </select>
          <Button href={`tel:${restaurant.contact.phone}`} className="hidden sm:inline-flex">
            {restaurant.ctas.call}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-neutral/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-neutral/70 lg:hidden">
          <div className="grid gap-1">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `rounded-lg px-2 py-2 ${isActive ? 'bg-secondary/20 text-accent' : ''}`}
              >
                {getFallback(locale, route.labelKey)}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
