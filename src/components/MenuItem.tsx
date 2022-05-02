import { useRecoilState } from 'recoil';
import { type TMenuListState, menuListState } from '../states/atoms';

const ADD = 'add';
const REDUCE = 'reduce';

interface IRemoveItemAtIndexProps {
  arr: TMenuListState[],
  index: number
}

interface IChangeMenuListProps {
  arr: TMenuListState[],
  type: string;
  key: TMenuListState['key'];
}

const removeItemAtIndex = (removeItemPops: IRemoveItemAtIndexProps) => {
  const {arr, index} = removeItemPops;
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
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
        case REDUCE:
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

  const totalMenuPrice = (key: TMenuListState['key']) => {
    const menuItem = menuList.find((menuItem) => menuItem.key === key);
    return menuItem ? menuItem.count * menuItem.price : 0;
  };

  const addItem = (key: TMenuListState['key']) => {
    const newList: TMenuListState[] = changeMenuItem({
      arr: menuList,
      type: ADD,
      key
    });
    setMenuList(newList);
  }

  const reduceItem = (key: TMenuListState['key']) => {
    const newList: TMenuListState[] = changeMenuItem({
      arr: menuList,
      type: REDUCE,
      key
    });
    setMenuList(newList);
  }

  const deleteItem = (key: TMenuListState['key']) => {
    const newMenuList: TMenuListState[] = menuList.filter((menuItem: TMenuListState) => menuItem.key !== key);
    setMenuList(newMenuList);
  };

  return (
    <div>{menuList.map((listItem) => {
      return (
        <div key={listItem.key}>
          <p>{listItem.text}</p>
          <button onClick={() => addItem(listItem.key)}>+</button>{listItem.count}<button onClick={() => reduceItem(listItem.key)}>-</button>
          <p>{totalMenuPrice(listItem.key)}円</p>
          <button onClick={() => deleteItem(listItem.key)}>Delete</button>
        </div>
        )
      }
    )}
    </div>
  );
}

export default MenuItem;
