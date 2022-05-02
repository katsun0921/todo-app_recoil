import {
  selector,
} from 'recoil';
import { menuListState } from '../atoms/index';
import { type TMenuListFilterItem } from './index';

export const menuListStatsState = selector({
  key: 'MenuListStats',
  get: ({get}) => {
    const menuList = get(menuListState);
    const totalNum = menuList.length;

    return {
      totalNum,
    };
  },
});
