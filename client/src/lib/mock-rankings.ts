export interface RankingData {
  rank: string;
  accountName: string;
  wins: number;
  losses: number;
}

export const globalRankings: RankingData[] = [
  { rank: "01", accountName: "Account Name", wins: 3227, losses: 122 },
  { rank: "02", accountName: "Account Name", wins: 2900, losses: 99 },
  { rank: "03", accountName: "Account Name", wins: 1800, losses: 150 },
  { rank: "04", accountName: "Account Name", wins: 1444, losses: 213 },
  { rank: "05", accountName: "Account Name", wins: 1200, losses: 180 },
  { rank: "06", accountName: "Account Name", wins: 1100, losses: 190 },
  { rank: "07", accountName: "Account Name", wins: 900, losses: 220 },
  { rank: "08", accountName: "Account Name", wins: 800, losses: 240 },
];

export const friendRankings: RankingData[] = [
  { rank: "01", accountName: "Friend Account", wins: 1500, losses: 80 },
  { rank: "02", accountName: "Friend Account", wins: 1200, losses: 95 },
  { rank: "03", accountName: "Friend Account", wins: 900, losses: 120 },
  { rank: "04", accountName: "Friend Account", wins: 700, losses: 150 },
  { rank: "05", accountName: "Friend Account", wins: 500, losses: 180 },
];
