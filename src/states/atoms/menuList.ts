import {
  atom,
} from 'recoil';

export type TMenuListState = {
  key: string;
  text: string;
  price: number;
  count: number;
};

export const menuListState = atom<TMenuListState[]>({
  key: 'MenuList',
  default: [
    {
      key: 'coffee',
      text: "コーヒー",
      price: 480,
      count: 0
    },
    {
      key: 'tea',
      text: "紅茶",
      price: 280,
      count: 0
    },
    {
      key: 'milk',
      text: "ミルク",
      price: 180,
      count: 0
    },
    {
      key: "coke",
      text: "コーラ",
      price: 190,
      count: 0
    },
    {
      key: "beer",
      text: "ビール",
      price: 580,
      count: 0
    }
  ],
});
