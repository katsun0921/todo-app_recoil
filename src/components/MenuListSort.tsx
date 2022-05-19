import { useRecoilState, useRecoilValue } from 'recoil';
import { TMenuListState, menuListSortState, menuListSortValues } from '../states/atoms';
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
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="menuSort">選択中のメニューをソート:</label>
      </div>
      <select id="menuSort" className="custom-select" value={sort} onChange={updateSort}>
      {menuListSortValues.map((menuValue, i) => (<option key={i} value={menuValue.value}>{menuValue.text}</option>))}
      </select>
    </div>
  );
}

export default MenuListSort;
