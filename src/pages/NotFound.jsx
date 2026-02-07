import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';

const NotFound = () => {
  const { locale } = useLocale();
  const notFoundCopy = getFallback(locale, 'notFound');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${notFoundCopy.title}`}</title>
      </Helmet>

      <Section>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl font-semibold text-neutral">{notFoundCopy.title}</h1>
          <p className="text-neutral/70">{notFoundCopy.description}</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-cream transition hover:bg-secondary hover:text-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {getFallback(locale, 'navigation.home')}
          </Link>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
