import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';

const Gallery = () => {
  const { locale } = useLocale();
  const galleryCopy = getFallback(locale, 'gallery');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${galleryCopy.title}`}</title>
        <meta name="description" content={galleryCopy.description} />
        <meta property="og:title" content={`${restaurant.identity.name} | ${galleryCopy.title}`} />
        <meta property="og:description" content={galleryCopy.description} />
      </Helmet>

      <Section>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-neutral">{galleryCopy.title}</h1>
            <p className="mt-3 text-neutral/70">{galleryCopy.description}</p>
          </div>
          <GalleryGrid images={restaurant.images.gallery} />
        </div>
      </Section>
    </>
  );
};

export default Gallery;
