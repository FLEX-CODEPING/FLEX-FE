export const BUTTON_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full bg-main-1 text-white h-10 rounded-lg ${className}`,
  trade: (className: string) =>
    `w-[240px] h-9 text-white rounded-lg ${className}`,
  statusClicked: (className: string) =>
    `w-10 h-5 text-main-1 bg-main-3 rounded-lg text-[10px] ${className}`,
  status: (className: string) =>
    `w-10 h-5 text-black-1 bg-gray-2 rounded-lg text-[10px] ${className}`,
  tradeModal: (className: string) =>
    `w-[120px] h-9 text-sm font-medium rounded-md ${className}`,
  blogPost: (className: string) =>
    `w-36 h-10 bg-[#000000] text-white rounded-[10px] font-bold text-xl ${className}`,
  account: (className: string) =>
    `w-[180px] h-[40px] bg-[#000000] text-white rounded-[10px] font-bold text-sm ${className}`,
  prediction: (className: string) =>
    `w-60 h-8 bg-black-1 text-white rounded-lg font-semibold text-[15px] ${className}`,
  notification: (className: string) =>
    `px-4 py-2 border border-gray-2 rounded-lg text-sm font-semibold ${className}`,
  checkName: (className: string) =>
    `w-[90px] h-9 text-white text-sm h-10 rounded-lg ${className}`,
  backTest: (className: string) =>
    `w-[200px] h-8 text-white text-sm rounded-lg ${className}`,
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full pl-4 h-10 rounded border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
  simulation: (className: string) =>
    `w-80 pl-3 pr-12 h-10 rounded-xl border border-gray-4 font-light text-sm outline-none dark:bg-black-0 dark:text-gray-4 ${className}`,
  trade: (className: string) =>
    `w-[140px] h-[33px] px-3 py-2 rounded-md border border-gray-2 font-light text-black-1 dark:text-gray-3 dark:bg-black-0 text-sm ${className}`,
  search: (className: string) =>
    `w-[150px] h-[24px] px-3 rounded-md border-none font-light text-black-0 text-base outline-none ${className}`,
  blogName: (className: string) =>
    `w-[80%] pl-4 h-10 rounded-[10px] border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
  record: (className: string) =>
    `w-full h-7 pl-2 pr-7 border border-gray-2 text-[11px] dark:text-gray-1 rounded-lg outline-none ${className}`,
  calendar: (className: string) =>
    `w-[105px] h-[28px] px-2 py-2 rounded-md border-[1.5px] dark:bg-black-1 dark:text-gray-3  border-gray-2 text-black-1 text-[11px] ${className}`,
  orderCnt: (className: string) =>
    `w-full dark:bg-gray-2 dark:border-gray-1 dark:text-black-1 pr-16 pl-4 h-8 rounded border border-gray-2 text-gray-1 text-sm ${className}`,
} as const;
