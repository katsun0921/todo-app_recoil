import { selector } from 'recoil';
import { menuListState } from '../atoms/index';

export const menuListStatsState = selector({
  key: 'MenuListStats',
  get: ({get}) => {
    const menuList = get(menuListState);
    const totalNum = menuList.reduce((sum, element) => {
      return sum + element.count;
    }, 0);
    const totalPrice = menuList.reduce((sum, element) => {
      return sum + (element.price * element.count);
    }, 0);

    return {
      totalNum,
      totalPrice
    };
  },
});
