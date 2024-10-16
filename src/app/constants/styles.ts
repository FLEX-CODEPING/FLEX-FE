export const BUTTON_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full bg-main-1 text-white h-10 rounded-lg ${className}`,
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full pl-4 h-10 rounded border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
  simulation: (className: string) =>
    `w-80 pl-3 h-10 rounded-xl border border-gray-1 font-light text-sm outline-none ${className}`,
  trade: (className: string) =>
    `w-[140px] h-[33px] px-3 py-2 rounded-md border border-gray-2 font-light text-black-1 text-sm ${className}`,
} as const;
