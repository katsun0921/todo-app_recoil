import {
  RecoilRoot,
} from 'recoil';
import { TodoList } from './components/Index';

import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
