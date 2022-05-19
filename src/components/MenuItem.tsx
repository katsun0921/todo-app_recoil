import { useRecoilState, useRecoilValue } from 'recoil';
import { TMenuListState, menuListState } from '../states/atoms';
import { menuListSortItemState } from '../states/selectors';

const ADD = 'add';
const SUBTRACT = 'subtract';

interface IChangeMenuListProps {
  arr: TMenuListState[],
  type: string;
  key: TMenuListState['key'];
}

const changeMenuItem = (menuList: IChangeMenuListProps) => {
  const { arr, type, key } = menuList;
  return  arr.map((menuItem) => {
    if (menuItem.key === key) {
      let { count } = menuItem;

      switch (type) {
        case ADD:
          count += 1;
          break;
        case SUBTRACT:
          count = count === 0 ? 0 : count - 1;
          break;
        default:
          break;
        }
      return {
        ...menuItem,
        count
      };
    } else {
      return menuItem;
    }
  })
}

const MenuItem = () => {
  const [menuList, setMenuList] = useRecoilState(menuListState);
  const menuSortList = useRecoilValue(menuListSortItemState);

  const addItem = (key: TMenuListState['key']) => {
    const newList: TMenuListState[] = changeMenuItem({
      arr: menuList,
      type: ADD,
      key
    });
    setMenuList(newList);
  }

  const subtractItem = (key: TMenuListState['key']) => {
    const newList: TMenuListState[] = changeMenuItem({
      arr: menuList,
      type: SUBTRACT,
      key
    });
    setMenuList(newList);
  }

  const deleteItem = (key: TMenuListState['key']) => {
    const newMenuList: TMenuListState[] = menuList.filter((menuItem: TMenuListState) => menuItem.key !== key);
    setMenuList(newMenuList);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">商品名</th>
          <th scope="col">個数(+と-ボタンで個数が増減します)</th>
          <th scope="col">トータルの価格</th>
          <th scope="col">商品を削除</th>
        </tr>
      </thead>
      <tbody>
      {menuSortList.map((listItem) => {
      return (
        <tr key={listItem.key}>
          <th scope="row">{listItem.text}</th>
          <td>
            <button className="btn" onClick={() => addItem(listItem.key)}>+</button>
            {listItem.count}
            <button className="btn" onClick={() => subtractItem(listItem.key)}>-</button></td>
          <td>{listItem.totalPrice}円</td>
          <td><button className="btn btn-danger" onClick={() => deleteItem(listItem.key)}>Delete</button></td>
        </tr>
        )
      }
    )}
    </tbody>
    </table>
  );
}

export default MenuItem;
