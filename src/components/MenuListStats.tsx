import { useRecoilValue } from 'recoil';
import { menuListStatsState } from '../states/selectors';

const MenuListStats = () => {
  const { totalCount, totalPrice } = useRecoilValue(menuListStatsState);

  return (
    <div>
      <p>お会計</p>
    <ul>
      <li>Total items: {totalCount}</li>
      <li>Total price: {totalPrice}円</li>
    </ul>
    </div>
  );
}

export default MenuListStats;
