import { useRecoilValue } from 'recoil';
import { menuListStatsState } from '../states/selectors';

const MenuListStats = () => {
  const { totalCount, totalPrice } = useRecoilValue(menuListStatsState);

  return (
    <div className="d-flex justify-content-end">
      <div>
      <h2>γδΌθ¨</h2>
      <ul>
        <li>Total items: {totalCount}</li>
        <li>Total price: {totalPrice}ε</li>
      </ul>
      </div>
    </div>
  );
}

export default MenuListStats;
