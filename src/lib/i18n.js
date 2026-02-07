import restaurant from '../content/restaurant.json';

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

export const getLocaleCopy = (locale) => {
  if (!restaurant.copy[locale]) {
    return restaurant.copy.de;
  }
  return restaurant.copy[locale];
};

export const t = (locale, path) => {
  const localeCopy = getLocaleCopy(locale);
  const value = getValue(localeCopy, path);
  if (value !== undefined) {
    return value;
  }
  if (locale !== 'de') {
    return localeCopy.translationNotice || restaurant.copy.de.translationNotice;
  }
  return getValue(restaurant.copy.de, path);
};

export const getFallback = (locale, path) => {
  const value = getValue(getLocaleCopy(locale), path);
  if (value !== undefined) {
    return value;
  }
  return getValue(restaurant.copy.de, path);
};
