import {
  useRecoilValue,
} from 'recoil';
import { menuListState } from '../states/atoms';
import { MenuItem, MenuSelect,  MenuListStats, MenuListFilters  } from './Index';

function MenuList() {
    const menuList = useRecoilValue(menuListState);

    return (
      <>
        {/* <MenuListStats />
        <MenuListFilters /> */}
        <MenuSelect />

        <MenuItem />
      </>
    );
  }
export default MenuList;
