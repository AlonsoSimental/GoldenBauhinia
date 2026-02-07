import restaurant from '../content/restaurant.json';

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

export const isLocaleComplete = (locale) => Boolean(restaurant.copy[locale]?.isComplete);

export const getLocaleCopy = (locale) => {
  if (!restaurant.copy[locale] || !isLocaleComplete(locale)) {
    return restaurant.copy.de;
  }
  return restaurant.copy[locale];
};

export const getTranslationNotice = (locale) => {
  if (locale === 'de' || isLocaleComplete(locale)) {
    return null;
  }
  return restaurant.copy[locale]?.translationNotice || restaurant.copy.de.translationNotice;
};

export const getFallback = (locale, path) => {
  const value = getValue(getLocaleCopy(locale), path);
  if (value !== undefined) {
    return value;
  }
  return getValue(restaurant.copy.de, path);
};
