import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

const Contact = () => {
  const { locale } = useLocale();
  const contactCopy = getFallback(locale, 'contact');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${contactCopy.title}`}</title>
        <meta name="description" content={contactCopy.description} />
        <meta property="og:title" content={`${restaurant.identity.name} | ${contactCopy.title}`} />
        <meta property="og:description" content={contactCopy.description} />
      </Helmet>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-semibold text-neutral">{contactCopy.title}</h1>
            <p className="mt-4 text-neutral/70">{contactCopy.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`tel:${restaurant.contact.phone}`}>{restaurant.ctas.call}</Button>
              <Button href={restaurant.links.googleMaps} variant="secondary">
                {restaurant.ctas.directions}
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-base p-8 text-cream shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">{restaurant.identity.type}</p>
            <h2 className="mt-3 text-2xl font-semibold">{restaurant.identity.name}</h2>
            <p className="mt-4 text-sm text-cream/80">{restaurant.identity.cuisine}</p>
            <p className="mt-6 text-sm text-cream/70">
              {restaurant.identity.address.street}
              <br />
              {restaurant.identity.address.postalCode} {restaurant.identity.address.city}
            </p>
            <a className="mt-6 inline-flex text-lg font-semibold text-secondary" href={`tel:${restaurant.contact.phone}`}>
              {restaurant.contact.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
