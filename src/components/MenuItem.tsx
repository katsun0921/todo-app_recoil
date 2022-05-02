import { useRecoilState, useRecoilValue } from 'recoil';
import { type TMenuListState, menuListState } from '../states/atoms';
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
    <div>{menuSortList.map((listItem) => {
      return (
        <div key={listItem.key}>
          <p>{listItem.text}</p>
          <button onClick={() => addItem(listItem.key)}>+</button>{listItem.count}<button onClick={() => subtractItem(listItem.key)}>-</button>
          <p>{listItem.totalPrice}円</p>
          <button onClick={() => deleteItem(listItem.key)}>Delete</button>
        </div>
        )
      }
    )}
    </div>
  );
}

export default MenuItem;
