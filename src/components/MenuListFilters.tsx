import {
  useRecoilState,
} from 'recoil';
import { menuListFilterState } from '../states/atoms';

interface IUpdateFilterChangeEventHandler {
  target: {
    value: string;
  }
}

function MenuListFilters() {
  const [filter, setFilter] = useRecoilState(menuListFilterState);

  const updateFilter = ({target: {value}}:IUpdateFilterChangeEventHandler) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default MenuListFilters;
