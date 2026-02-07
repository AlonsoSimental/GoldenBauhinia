import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';

const About = () => {
  const { locale } = useLocale();
  const aboutCopy = getFallback(locale, 'about');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${aboutCopy.title}`}</title>
        <meta name="description" content={aboutCopy.paragraphs[0]} />
        <meta property="og:title" content={`${restaurant.identity.name} | ${aboutCopy.title}`} />
        <meta property="og:description" content={aboutCopy.paragraphs[0]} />
      </Helmet>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-semibold text-neutral">{aboutCopy.title}</h1>
            <div className="mt-6 space-y-4 text-neutral/70">
              {aboutCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={restaurant.images.venue[0].src}
              alt={restaurant.images.venue[0].alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
