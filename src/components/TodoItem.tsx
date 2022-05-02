import {
    useRecoilState,
} from 'recoil';
import { type TTodoListState,todoListState } from '../states/atoms';

interface IReplaceItemAtIndexProps {
  arr: TTodoListState[],
  index: number,
  newValue: TTodoListState
}

interface IRemoveItemAtIndexProps {
  arr: TTodoListState[],
  index: number
}

function TodoItem({item}: {item: TTodoListState}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}: {target: {value: string} }) => {
      const newList: TTodoListState[] = replaceItemAtIndex({
        arr: todoList,
        index,
        newValue: {
          ...item,
          text: value,
        }
      });

      setTodoList(newList);
  };

  const toggleItemCompletion = () => {
      const newList: TTodoListState[] = replaceItemAtIndex({
        arr: todoList,
        index,
        newValue: {
          ...item,
          isComplete: !item.isComplete,
        }
      });

      setTodoList(newList);
  };

  const deleteItem = () => {
    const newList: TTodoListState[] = removeItemAtIndex({
      arr: todoList,
      index
    });

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(replaceItemProps: IReplaceItemAtIndexProps) {
  const {arr, index, newValue} = replaceItemProps;
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(removeItemPops: IRemoveItemAtIndexProps) {
  const {arr, index} = removeItemPops;
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
