import { Outlet } from 'react-router-dom';
import restaurant from '../content/restaurant.json';
import { useLocale } from '../lib/LocaleContext.jsx';
import { getTranslationNotice } from '../lib/i18n.js';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ routes }) => {
  const { locale } = useLocale();
  const translationNotice = getTranslationNotice(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar routes={routes} />
      {translationNotice && (
        <div className="bg-secondary/20 py-2 text-center text-xs font-semibold uppercase tracking-wide text-neutral">
          {translationNotice}
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer links={restaurant.links} />
    </div>
  );
};

export default Layout;
