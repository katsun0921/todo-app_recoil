import {
    useRecoilState,
} from 'recoil';
import { todoListState } from '../states/atoms';

interface IReplaceItemAtIndexProps {
  arr: any[],
  index: number,
  newValue: any
}

interface IRemoveItemAtIndexProps {
  arr: any[],
  index: number
}

function TodoItem({item}: {item: any}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}: {target: {value: any} }) => {
      const newList: any = replaceItemAtIndex({
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
      const newList: any = replaceItemAtIndex({
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
      const newList: any = removeItemAtIndex({
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
