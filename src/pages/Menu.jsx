import { Helmet } from 'react-helmet-async';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getFallback } from '../lib/i18n.js';
import Section from '../components/Section.jsx';
import MenuCategory from '../components/MenuCategory.jsx';

const Menu = () => {
  const { locale } = useLocale();
  const menuCopy = getFallback(locale, 'menuPage');

  return (
    <>
      <Helmet>
        <title>{`${restaurant.identity.name} | ${menuCopy.title}`}</title>
        <meta name="description" content={menuCopy.description} />
        <meta property="og:title" content={`${restaurant.identity.name} | ${menuCopy.title}`} />
        <meta property="og:description" content={menuCopy.description} />
      </Helmet>

      <Section>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-neutral">{menuCopy.title}</h1>
            <p className="mt-3 text-neutral/70">{menuCopy.description}</p>
            <p className="mt-2 text-sm text-neutral/60">{restaurant.menu.notice}</p>
          </div>
          <MenuCategory items={restaurant.menu.items} />
        </div>
      </Section>
    </>
  );
};

export default Menu;
