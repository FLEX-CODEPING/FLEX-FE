import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        dela: ['var(--font-DelaGothicOne)'],
      },
      colors: {
        main: {
          1: '#F95700',
          2: '#FFA474',
          3: '#FFF3EC',
          4: '#ffeae0',
        },
        red: {
          1: '#FF0000',
          2: '#FF6A6A',
        },
        blue: {
          1: '#0065D1',
          2: '#6AB2FF',
        },
        gray: {
          1: '#7A7A7A',
          2: '#CBCACA',
          3: '#EEEEEE',
          4: '#AAAAAA',
          5: '#f6f6f6',
        },
        black: {
          0: '#000000',
          1: '#434343',
        },
      },
      spacing: {
        '12.5': '50px',
      },
    },
  },
};

export default config;
