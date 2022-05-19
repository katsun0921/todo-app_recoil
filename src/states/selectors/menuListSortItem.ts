import { selector } from 'recoil';
import {
  menuListSortState,
  TMenuListState,
  MenuListValues,
  MENU_LIST_STATE,
  MENU_TEXT,
  MENU_TOTAL_PRICE_UP,
  MENU_TOTAL_PRICE_DOWN,
  MENU_COUNT_UP,
  MENU_COUNT_DOWN
} from '../atoms/index';
import { menuListItemState } from './index';

type TCompareType = 'up' | 'down';
type TCompareValue = 'text' | 'count' | 'totalPrice';

const compareMenuAndMenuState = (arr: TMenuListState[]) => {
  let sortMenuItemList = [...arr];
  let newMenuList: TMenuListState[]  = [];

  for (let i = 0; i < MenuListValues.length; i++) {
    for (let j = 0; sortMenuItemList.length > j; j++) {
      if (MenuListValues[i].key === sortMenuItemList[j].key) {
        newMenuList.push(sortMenuItemList[j]);
      }
    }
  }
  return newMenuList;
}

const compareMenuText = (arr: TMenuListState[]) => {
  let sortMenuItemList = [...arr];
  return sortMenuItemList.sort((a: TMenuListState, b: TMenuListState) => {
    const textA = a.text.toUpperCase(); // 大文字と小文字を無視する
    const textB = b.text.toUpperCase(); // 大文字と小文字を無視する
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }

    // texts must be equal
    return 0;
  })
}

const compareMenuList = (arr: TMenuListState[],value: TCompareValue, type: TCompareType, ) => {
  let sortMenuItemList = [...arr];

  if (value === 'totalPrice') {
    switch (type) {
      case 'up':
        sortMenuItemList.sort((a: TMenuListState, b: TMenuListState) => b.totalPrice - a.totalPrice)
      break;
      case 'down':
      sortMenuItemList.sort((a: TMenuListState, b: TMenuListState) => a.totalPrice - b.totalPrice)
      break;
      default:
      break;
    }
  }
  if (value === 'count') {
    switch (type) {
      case 'up':
        sortMenuItemList.sort((a: TMenuListState, b: TMenuListState) => b.count - a.count)
      break;
      case 'down':
      sortMenuItemList.sort((a: TMenuListState, b: TMenuListState) => a.count - b.count)
      break;
      default:
      break;
    }
  }
  return sortMenuItemList;
}

export const menuListSortItemState = selector({
  key: 'MenuListSortItem',
  get: ({get}) => {
    const sort = get(menuListSortState);
    const menuList = get(menuListItemState);

    switch (sort) {
      case MENU_LIST_STATE:
        return compareMenuAndMenuState(menuList);
      case MENU_TEXT:
        return compareMenuText(menuList);
      case MENU_TOTAL_PRICE_UP:
        return compareMenuList(menuList, 'totalPrice', 'up');
      case MENU_TOTAL_PRICE_DOWN:
        return compareMenuList(menuList, 'totalPrice', 'down');
      case MENU_COUNT_UP:
        return compareMenuList(menuList, 'count', 'up');
      case MENU_COUNT_DOWN:
        return compareMenuList(menuList, 'count', 'down');
      default:
        return menuListItemState;
    }

  },
});
