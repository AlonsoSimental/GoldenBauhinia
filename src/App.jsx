import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import restaurant from './content/restaurant.json';
import { LocaleContext } from './lib/LocaleContext.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Location from './pages/Location.jsx';
import Contact from './pages/Contact.jsx';
import Menu from './pages/Menu.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  const [locale, setLocale] = useState('de');

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const hasMenu = restaurant.menu.items.length >= 3;
  const hasGallery = restaurant.images.gallery.length >= 6;
  const hasAbout = restaurant.copy.de.about.paragraphs.length >= 3;

  const routes = useMemo(
    () =>
      [
        { path: '/', routePath: '', element: <Home />, labelKey: 'navigation.home', index: true },
        hasMenu
          ? { path: '/menu', routePath: 'menu', element: <Menu />, labelKey: 'navigation.menu' }
          : null,
        {
          path: '/standort',
          routePath: 'standort',
          element: <Location />,
          labelKey: 'navigation.location'
        },
        hasGallery
          ? {
              path: '/galerie',
              routePath: 'galerie',
              element: <Gallery />,
              labelKey: 'navigation.gallery'
            }
          : null,
        hasAbout
          ? {
              path: '/uber-uns',
              routePath: 'uber-uns',
              element: <About />,
              labelKey: 'navigation.about'
            }
          : null,
        { path: '/kontakt', routePath: 'kontakt', element: <Contact />, labelKey: 'navigation.contact' }
      ].filter(Boolean),
    [hasMenu, hasGallery, hasAbout]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Routes>
        <Route path="/" element={<Layout routes={routes} />}>
          {routes.map((route) =>
            route.index ? (
              <Route index element={route.element} key="index" />
            ) : (
              <Route key={route.path} path={route.routePath} element={route.element} />
            )
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LocaleContext.Provider>
  );
};

export default App;
