import { capitalize } from 'src/helpers';

import { ArrayOfItemsNames } from './app';

export const withGet = (word): string => ['get', word].join('');
export const toSingular = (word): string => word.replace(/ies$/g, 'y').replace(/s$/g, '');
export const toPlural = (word): string =>
  /y$/.test(word) ? word.replace(/y$/g, 'ies') : [word, 's'].join('');

export const buildNameCases = (pathname: string): TYPES.NameCases => {
  const pathnameArray = pathname.split('/');
  const pathnameArrayN = pathnameArray.pop() || '-';
  const pathnameArray1N = pathnameArray.pop() || '-';
  const isItemsPath = ArrayOfItemsNames.includes(pathnameArrayN);
  const itemsName: string = isItemsPath ? pathnameArrayN : pathnameArray1N;
  const itemName: string = toSingular(itemsName);
  const ItemsName = capitalize(itemsName);
  const ItemName = capitalize(itemName);

  const nameCases: TYPES.NameCases = {
    ITEMS: itemsName.toUpperCase(),
    Items: ItemsName,
    getItems: withGet(ItemsName),
    item: itemName,
    ITEM: itemName.toUpperCase(),
    Item: ItemName,
    getItem: withGet(ItemName),
  };

  return nameCases;
};
