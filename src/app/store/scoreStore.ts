import { create } from 'zustand';

interface ScoreListState {
  score: number;
  addScore: (amount: number) => void;
  subtractScore: (amount: number) => void;
}

const useScoreStore = create<ScoreListState>((set) => ({
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

export default useScoreStore;
