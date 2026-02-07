import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Divider from '../components/Divider.jsx';

const Home = () => {
  const { locale } = useLocale();
  const hero = getFallback(locale, 'hero');
  const highlights = getFallback(locale, 'highlights');
  const homeMenu = getFallback(locale, 'homeMenu');
  const homeAbout = getFallback(locale, 'homeAbout');
  const ctaBlock = getFallback(locale, 'ctaBlock');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${hero.eyebrow}`}</title>
        <meta name="description" content={hero.subtitle} />
        <meta property="og:title" content={restaurant.identity.name} />
        <meta property="og:description" content={hero.subtitle} />
        <meta property="og:image" content={restaurant.images.hero.src} />
      </Helmet>

      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={restaurant.images.hero.src}
            alt={restaurant.images.hero.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-base/70" aria-hidden="true" />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/90">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`tel:${restaurant.contact.phone}`}>{hero.primaryCta}</Button>
            <Button href={restaurant.links.googleMaps} variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral/60">{hero.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral">{highlights.title}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.items.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-neutral">{homeMenu.title}</h2>
            <p className="mt-3 text-neutral/70">{homeMenu.description}</p>
            <p className="mt-2 text-sm text-neutral/60">{restaurant.menu.notice}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {restaurant.menu.items.map((item) => (
              <div key={item.label} className="overflow-hidden rounded-2xl shadow-soft">
                <img src={item.image} alt={item.label} className="h-40 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-neutral/5">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-neutral">{homeAbout.title}</h2>
            <p className="mt-4 text-neutral/70">{homeAbout.body}</p>
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

      <Section>
        <div className="rounded-3xl bg-base px-6 py-10 text-cream sm:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">{ctaBlock.title}</p>
          <h2 className="mt-3 text-3xl font-semibold">{ctaBlock.description}</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={`tel:${restaurant.contact.phone}`}>{ctaBlock.call}</Button>
            <Button href={restaurant.links.googleMaps} variant="secondary">
              {ctaBlock.directions}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
