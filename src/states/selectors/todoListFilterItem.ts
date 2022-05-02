import {
  selector,
} from 'recoil';
import { todoListState, todoListFilterState } from '../atoms/index';

export type TTodoListFilterItem = {
  isComplete: boolean;
};

export const TodoListFilterItemState = selector({
  key: 'TodoListFilterItem',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: TTodoListFilterItem) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: TTodoListFilterItem) => !item.isComplete);
      default:
        return list;
    }
  },
});
