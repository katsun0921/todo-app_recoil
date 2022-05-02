import { useRecoilState, useRecoilValue } from 'recoil';
import { type TMenuListState, menuListFilterState, menuListFilterValues } from '../states/atoms';
import { menuListItemState } from '../states/selectors';
interface IUpdateFilterChangeEventHandler {
  target: {
    value: TMenuListState['key'];
  }
}

const MenuListFilters = () => {
  const [filter, setFilter] = useRecoilState(menuListFilterState);
  const menuListItem = useRecoilValue(menuListItemState);

  const updateFilter = ({target: {value}}:IUpdateFilterChangeEventHandler) => {
    setFilter(value);
  };

  if (menuListItem.length === 0) return null;

  return (
    <>
      選択中のメニューをフィルタ:
      <select value={filter} onChange={updateFilter}>
      {menuListFilterValues.map((menuValue, i) => (<option key={i} value={menuValue.value}>{menuValue.text}</option>))}
      </select>
    </>
  );
}

export default MenuListFilters;
