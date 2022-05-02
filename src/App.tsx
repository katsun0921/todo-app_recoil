import {
  RecoilRoot,
} from 'recoil';
import { MenuList } from './components/Index';

import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <MenuList />
      </RecoilRoot>
    </div>
  );
}

export default App;
