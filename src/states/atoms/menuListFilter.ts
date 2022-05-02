import {
  atom,
} from 'recoil';

export const menuListFilterState = atom<string>({
  key: 'MenuListFilter',
  default: 'Show All',
});
