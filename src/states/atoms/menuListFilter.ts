import { atom } from 'recoil';

export const MENU_LIST_STATE = 'menu_list_state';
export const MENU_TEXT = 'menu_text';
export const MENU_TOTAL_PRICE_UP = 'menu_total_price_up';
export const MENU_TOTAL_PRICE_DOWN = 'menu_total_price_down';
export const MENU_COUNT_UP = 'menu_count_up';
export const MENU_COUNT_DOWN = 'menu_count_down';

export type TMenuListFilter = {
  text: string;
  value: string;
};

export const menuListFilterValues: TMenuListFilter[] = [
  {
    text: 'メニューリスト順',
    value: MENU_LIST_STATE
  },
  {
    text: '名前順',
    value: MENU_TEXT
  },
  {
    text: 'トータルが大きい順',
    value: MENU_TOTAL_PRICE_UP
  },
  {
    text: 'トータルが小さい順',
    value: MENU_TOTAL_PRICE_DOWN
  },
  {
    text: '個数が多い順',
    value: MENU_COUNT_UP
  },
  {
    text: '個数が小さい順',
    value: MENU_COUNT_DOWN
  },
];

export const menuListFilterState = atom<string>({
  key: 'MenuListFilter',
  default: MENU_LIST_STATE
});
