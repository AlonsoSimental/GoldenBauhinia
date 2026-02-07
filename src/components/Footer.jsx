import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';

const Footer = () => {
  const { locale } = useLocale();
  const address = restaurant.identity.address;

  return (
    <footer className="bg-base text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-xl font-semibold">{restaurant.identity.name}</h2>
          <p className="mt-3 text-sm text-cream/80">{restaurant.identity.cuisine}</p>
          <p className="mt-2 text-sm text-cream/70">
            {address.street}, {address.postalCode} {address.city}
          </p>
          <a className="mt-4 inline-block text-sm font-semibold text-secondary" href={`tel:${restaurant.contact.phone}`}>
            {restaurant.contact.phone}
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/70">
            {getFallback(locale, 'footer.hoursLabel')}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {restaurant.hours.map((item) => (
              <li key={item.day} className="flex items-center justify-between">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/70">
            {getFallback(locale, 'footer.languagesLabel')}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-cream/80">
            {restaurant.languages.map((language) => (
              <li key={language} className="rounded-full border border-cream/20 px-3 py-1">
                {language.toUpperCase()}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-cream/60">{getFallback(locale, 'footer.legal')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
