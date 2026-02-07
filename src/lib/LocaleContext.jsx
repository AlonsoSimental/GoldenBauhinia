import { createContext, useContext } from 'react';

export const LocaleContext = createContext({
  locale: 'de',
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);
