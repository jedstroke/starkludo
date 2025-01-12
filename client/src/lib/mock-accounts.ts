export interface Account {
  id: string;
  number: string;
  name: string;
  points?: string;
  rank?: string;
  isNew?: boolean;
}

export const defaultAccounts: Account[] = [
  {
    id: "1",
    number: "01",
    name: "Account Name",
    points: "20.6k",
    rank: "88",
  },
  {
    id: "2",
    number: "02",
    name: "Account Name",
    points: "93.9k",
    rank: "43",
  },
  {
    id: "3",
    number: "03",
    name: "Account Name",
    points: "109k",
    rank: "21",
  },
  {
    id: "4",
    number: "04",
    name: "Name Account",
    isNew: true,
  },
];
