interface SignUpFormTypes {
  birth: string;
  nickname: string;
  blogName: string;
  salary: string;
  interestKeywords: string[];
  socialId: number;
}

type InterestTypes =
  | 'DOMESTIC_STOCK'
  | 'FOREIGN_STOCK'
  | 'CRYPTO'
  | 'FUTURES'
  | 'ETF'
  | 'ECONOMY'
  | 'POLITICS'
  | 'EXCHANGE_RATE'
  | 'REAL_ESTATE'
  | 'INDEX';

type IncomeTypes =
  | 'LESS_3K'
  | 'LESS_5K'
  | 'LESS_8K'
  | 'LESS_100K'
  | 'LESS_150K'
  | 'LESS_200K'
  | 'OVER_200K';

  interface BlogNameCheckTypes {
    text: string;
    textColor:string
  }