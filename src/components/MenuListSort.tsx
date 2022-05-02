import { useRecoilState, useRecoilValue } from 'recoil';
import { type TMenuListState, menuListSortState, menuListSortValues } from '../states/atoms';
import { menuListItemState } from '../states/selectors';
interface IUpdateSortChangeEventHandler {
  target: {
    value: TMenuListState['key'];
  }
}

const MenuListSort = () => {
  const [sort, setSort] = useRecoilState(menuListSortState);
  const menuListItem = useRecoilValue(menuListItemState);

  const updateSort = ({target: {value}}:IUpdateSortChangeEventHandler) => {
    setSort(value);
  };

  if (menuListItem.length === 0) return null;

  return (
    <>
      選択中のメニューをソート:
      <select value={sort} onChange={updateSort}>
      {menuListSortValues.map((menuValue, i) => (<option key={i} value={menuValue.value}>{menuValue.text}</option>))}
      </select>
    </>
  );
}

export default MenuListSort;
