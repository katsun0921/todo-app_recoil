import {
  atom,
} from 'recoil';

export type TTodoListState = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<TTodoListState[]>({
  key: 'TodoList',
  default: [],
});
