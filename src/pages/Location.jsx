import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

const Location = () => {
  const { locale } = useLocale();
  const locationCopy = getFallback(locale, 'location');
  const address = restaurant.identity.address;

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${locationCopy.title}`}</title>
        <meta name="description" content={locationCopy.title} />
        <meta property="og:title" content={`${restaurant.identity.name} | ${locationCopy.title}`} />
        <meta property="og:description" content={locationCopy.title} />
      </Helmet>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-semibold text-neutral">{locationCopy.title}</h1>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral/60">
                {locationCopy.addressLabel}
              </p>
              <p className="mt-2 text-lg text-neutral">
                {address.street}
                <br />
                {address.postalCode} {address.city}, {address.region}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral/60">
                {locationCopy.hoursLabel}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral/70">
                {restaurant.hours.map((item) => (
                  <li key={item.day} className="flex items-center justify-between">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Button href={restaurant.links.googleMaps}>{locationCopy.cta}</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={restaurant.images.venue[1].src}
              alt={restaurant.images.venue[1].alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Location;
