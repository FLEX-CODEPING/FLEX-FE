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
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full pl-4 h-10 rounded border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
  simulation: (className: string) =>
    `w-80 pl-3 pr-12 h-10 rounded-xl border border-gray-4 font-light text-sm outline-none ${className}`,
  trade: (className: string) =>
    `w-[140px] h-[33px] px-3 py-2 rounded-md border border-gray-2 font-light text-black-1 text-sm ${className}`,
  search: (className: string) =>
    `w-[150px] h-[24px] px-3 rounded-md border-none font-light text-black-0 text-base outline-none ${className}`,
  blogName: (className: string) =>
    `w-[80%] pl-4 h-10 rounded-[10px] border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
} as const;
