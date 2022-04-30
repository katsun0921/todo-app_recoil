import { ChangeEventHandler, useCallback, useState } from "react";
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
        id: getId(),
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
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
