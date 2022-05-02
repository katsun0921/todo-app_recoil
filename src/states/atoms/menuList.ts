import {
  atom,
} from 'recoil';

export type TMenuListState = {
  key: string;
  text: string;
  price: number;
  count: number;
  isChecked: boolean;
};

export const MenuListValues: TMenuListState[] = [
  {
    key: 'coffee',
    text: "コーヒー",
    price: 480,
    count: 0,
    isChecked: false
  },
  {
    key: 'tea',
    text: "紅茶",
    price: 280,
    count: 0,
    isChecked: false
  },
  {
    key: 'milk',
    text: "ミルク",
    price: 180,
    count: 0,
    isChecked: false
  },
  {
    key: "coke",
    text: "コーラ",
    price: 190,
    count: 0,
    isChecked: false
  },
  {
    key: "beer",
    text: "ビール",
    price: 580,
    count: 0,
    isChecked: false
  }
];

export const menuListState = atom<TMenuListState[]>({
  key: 'MenuList',
  default: []
});
