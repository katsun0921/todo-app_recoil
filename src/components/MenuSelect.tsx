import { useRecoilState } from 'recoil';
import { TMenuListState, menuListState, MenuListValues } from '../states/atoms';


const MenuSelect = () => {
  const [menuList, setMenuList] = useRecoilState(menuListState);

  const handleCheckedMenuItem = (event: React.ChangeEvent<{ value: TMenuListState['key'], checked: boolean }>) => {
    const value  = event.target.value as TMenuListState['key'];
    const checked = event.target.checked;
    const checkedMenuList = MenuListValues.find((menuItem: TMenuListState) => menuItem.key === value)
    if (checkedMenuList === undefined) {
      return;
    }
    if (checked) {
      let { count, isChecked } = checkedMenuList;
      count = 1;
      isChecked = true;
      return setMenuList([
        ...menuList,
        {
          ...checkedMenuList,
          count,
          isChecked
        }
      ])
    } else {
      const newMenuList = menuList.filter((menuItem: TMenuListState) => menuItem.key !== value);
      return setMenuList(newMenuList);
    }
  }

  const isCheckedMenuList = (menuItemKey: TMenuListState['key']) => {
    const checkedMenuList = menuList.find((menuItem: TMenuListState) => menuItem.key === menuItemKey);
    return checkedMenuList === undefined ? false : true;
  }

  return (
    <div>
      <h1>メニューを選択してください</h1>
      <ul className="mb-4">
        {MenuListValues.map((menuItem) => {
          return (
            <li key={menuItem.key} className="input-group">
              <label className="input-group-text w-100">
                <input className="form-check-input mt-0" type="checkbox" value={menuItem.key} onChange={(e) => { handleCheckedMenuItem(e) }} checked={isCheckedMenuList(menuItem.key)}
                />
              {menuItem.text} 1個 {menuItem.price}円</label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuSelect;
