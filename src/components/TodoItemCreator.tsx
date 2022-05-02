import { useCallback, useState } from "react";
import {
  useSetRecoilState,
} from 'recoil';
import { todoListState } from '../states/atoms';

interface ITodoItemCreatorChangeEventHandler {
  target: {
    value: string;
  }
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList  = useSetRecoilState(todoListState);

  const addItem = useCallback(() => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(oldTodoList.length),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  }, [inputValue, setTodoList]);

  const onChange = useCallback(({ target: { value }}: ITodoItemCreatorChangeEventHandler) => {
    setInputValue(value);
  }
, []);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility for creating unique Id
function getId(id = 0) {
  return id++;
}

export default TodoItemCreator;
