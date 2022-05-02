import { selector } from 'recoil';
import { menuListState } from '../atoms/index';

export const menuListItemState = selector({
  key: 'MenuListItem',
  get: ({get}) => {
    const list = get(menuListState);
    return list.map(item => {
      return {
        ...item,
        totalPrice: item.price * item.count,
      }
    });
  },
});
