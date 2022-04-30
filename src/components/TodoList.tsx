import {
  useRecoilValue,
} from 'recoil';
import { todoListState } from '../states/atoms';
import { TodoItem, TodoItemCreator, TodoListStats, TodoListFilters  } from './Index';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
      <>
        {<TodoListStats />}
        {<TodoListFilters />}
        <TodoItemCreator />

        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }
export default TodoList;
