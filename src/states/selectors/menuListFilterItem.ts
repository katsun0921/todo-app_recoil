import {
  selector,
} from 'recoil';
import { menuListState, menuListFilterState } from '../atoms/index';

export type TMenuListFilterItem = {
  isComplete: boolean;
};

export const MenuListFilterItemState = selector({
  key: 'MenuListFilterItem',
  get: ({get}) => {
    const filter = get(menuListFilterState);
    const list = get(menuListState);

    switch (filter) {
      case 'Show Completed':
      case 'Show Uncompleted':
      default:
        return list;
    }
  },
});
