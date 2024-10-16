// FilterBar.ts

interface FilterOption {
    label: string;
    value: string;
  }
  
  export const filterOptions: FilterOption[] = [
    {
      label: "3천 이하",
      value: "below-3000",
    },
    {
      label: "21 ~ 30",
      value: "age-21-30",
    },
    {
      label: "해외주식",
      value: "overseas-stock",
    },
    {
      label: "부동산",
      value: "real-estate",
    },
  ];
  