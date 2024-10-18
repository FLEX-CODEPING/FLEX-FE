import { create } from 'zustand';

interface ScoreListState {
  score: number;
  addScore: (amount: number) => void;
  subtractScore: (amount: number) => void;
}

export const useScoreStore = create<ScoreListState>((set) => ({
  score: 0,

  addScore: (amount) =>
    set((state) => ({
      score: state.score + amount,
    })),

  subtractScore: (amount) =>
    set((state) => ({
      score: state.score - amount,
    })),
}));

interface SidebarState {
  selectedItem: SideNavType | null;
  setSelectedItem: (item: SideNavType) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  selectedItem: null,
  setSelectedItem: (item: SideNavType) =>
    set((state) => ({
      selectedItem: state.selectedItem === item ? null : item,
    })),
}));
