import {
  useRecoilValue,
} from 'recoil';
import { menuListStatsState } from '../states/selectors';

function MenuListStats() {
  const {
    totalNum,
  } = useRecoilValue(menuListStatsState);


  return (
    <ul>
      <li>Total items: {totalNum}</li>
    </ul>
  );
}

export default MenuListStats;
