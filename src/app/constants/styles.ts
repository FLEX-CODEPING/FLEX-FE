export const BUTTON_STYLE = {
  dialog: (className: string) =>
    `flex-center px-4 py-2 gap-2 rounded-[4px] whitespace-nowrap text-lg font-medium ${className}`,
  default: (className: string) => `w-full ${className}`,
  modalLogin: (className: string) =>
    `w-[110px] h-[45px] bg-primary-3 rounded text-white text-sm font-bold font-medium cursor-pointer ${className}`,
  modalClose: (className: string) =>
    `w-[110px] h-[45px] bg-white rounded text-black text-sm font-bold border border-gray-1 cursor-pointer ${className}`,
  deleteModalButton: (className: string) =>
    `flex-center w-[166px] h-[45px] rounded text-xl ${className}`,
  faqButton: (className: string) =>
    `flex-center text-white w-[39px] h-[24px] rounded-[4px] text-[13px] ${className}`,
  recommendButton: (className: string) =>
    `flex-center text-black w-[244px] h-[41px] rounded text-[18px] border border-gray-1 mt-2 font-normal p-2.5 ${className}`,
  quoteOrder: (className: string) =>
    `w-full h-[45px] bg-primary-3 rounded text-white text-lg font-medium  ${className}`,
  quoteClose: (className: string) =>
    `w-full h-[45px] bg-white rounded text-black text-lg font-medium border border-gray-2 ${className}`,
  quoteTableControl: (className: string) =>
    `w-[56px] h-[29px] rounded text-sm font-medium ${className}`,
  accountConfirm: (className: string) =>
    `w-[600px] h-[46px] rounded text-white text-lg font-medium bg-primary-3 ${className}`,
  accountUpdate: (className: string) =>
    `w-[288px] h-[46px] rounded text-lg font-medium ${className}`,
} as const;

export const INPUT_STYLE = {
  signin: (className: string) => `h-14 ${className}`,
  search: (className: string) =>
    `w-full h-9 rounded-[4px] text-sm placeholder:text-sm focus:outline-none ${className}`,
  // 견적서 개수 입력
  count: (className: string) => ` ${className}`,
  headerSearch: (className: string) =>
    `w-80 h-4 font-normal outline-none	 ${className}`,
  default: (className: string) => `w-full h-full ${className}`,
  // 다이얼로그 input
  dialog: (className: string) =>
    `border-[1px] border-gray-2 rounded-[4px] p-3 w-full ${className}`,
  searchProduct: (className: string) =>
    `w-[479px] pl-6 py-3 h-[44px] rounded-[4px] text-base font-normal bg-[#f6f6f6] focus:outline-gray-1  focus:bg-white ${className}`,
  account: (className: string) =>
    `w-[600px] h-[56px] border-[1px] border-gray-1 rounded-[4px] px-6 py-1 ${className}`,
} as const;
