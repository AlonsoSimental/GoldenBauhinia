import { NavLink } from 'react-router-dom';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Button from './Button.jsx';

const Navbar = ({ routes }) => {
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label={restaurant.identity.name}>
          <img
            src={restaurant.images.logo.src}
            alt={restaurant.images.logo.alt}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral/70">{restaurant.identity.type}</p>
            <p className="text-lg font-semibold text-neutral">{restaurant.identity.name}</p>
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

        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="language-select">
            {getFallback(locale, 'labels.language')}
          </label>
          <select
            id="language-select"
            className="rounded-full border border-neutral/20 bg-cream px-3 py-2 text-xs font-semibold uppercase tracking-wide"
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

      <div className="flex items-center gap-4 overflow-x-auto border-t border-neutral/10 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral/70 lg:hidden">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => (isActive ? 'text-accent' : '')}
          >
            {getFallback(locale, route.labelKey)}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
