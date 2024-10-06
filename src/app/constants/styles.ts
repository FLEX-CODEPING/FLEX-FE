export const BUTTON_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full bg-main-1 text-white h-10 rounded-lg ${className}`,
} as const;

export const INPUT_STYLE = {
  default: (className: string) => `w-full ${className}`,
  signUp: (className: string) =>
    `w-full pl-4 h-[40px] rounded border border-gray-2 text-sm outline-none focus:border-main-1 ${className}`,
} as const;
