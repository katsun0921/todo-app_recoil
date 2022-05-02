import {
  atom,
} from 'recoil';

export const todoListFilterState = atom<string>({
  key: 'TodoListFilter',
  default: 'Show All',
});
