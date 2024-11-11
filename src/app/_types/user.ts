interface MyAccountTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: AccountResultTypes;
}

interface AccountResultTypes {
  nickname: string;
  blogName: string;
  birth: string;
  income: string;
  interests: string[];
}
