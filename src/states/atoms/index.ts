import {
    atom,
} from 'recoil';

export type TodoItemType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<TodoItemType[]>({
    key: 'TodoList',
    default: [],
});

export const todoListFilterState = atom<string>({
  key: 'TodoListFilter',
  default: 'Show All',
});
