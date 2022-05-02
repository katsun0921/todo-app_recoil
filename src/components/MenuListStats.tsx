import { useRecoilValue } from 'recoil';
import { menuListStatsState } from '../states/selectors';

const MenuListStats = () => {
  const { totalCount, totalPrice } = useRecoilValue(menuListStatsState);

  return (
    <div className="d-flex justify-content-end">
      <div>
      <h2>お会計</h2>
      <ul>
        <li>Total items: {totalCount}</li>
        <li>Total price: {totalPrice}円</li>
      </ul>
      </div>
    </div>
  );
}

export default MenuListStats;
