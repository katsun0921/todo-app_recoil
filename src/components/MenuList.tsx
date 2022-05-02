import {
  useRecoilValue,
} from 'recoil';
import { menuListState } from '../states/atoms';
import { MenuItem,  MenuListStats, MenuListFilters  } from './Index';

function MenuList() {
    const menuList = useRecoilValue(menuListState);

    return (
      <>
        {/* <MenuListStats />
        <MenuListFilters /> */}

          <MenuItem />
      </>
    );
  }
export default MenuList;
