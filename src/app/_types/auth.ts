interface SignUpFormTypes {
  date: string;
  nickName: string;
  blogName: string;
  income: string;
  interest: string[];
  code:string
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
  | 'LESS_7.5K'
  | 'LESS_10K'
  | 'LESS_15K'
  | 'LESS_2K'
  | 'OVER_3K';
