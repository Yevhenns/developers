import { create } from 'zustand';

type State = {
  token: string;
  resStatus: null | number;
};

type Action = {
  updateToken: (token: State['token']) => void;
  updateresStatus: (token: State['resStatus']) => void;
};

export const useDevelopersStore = create<State & Action>(set => ({
  token: '',
  resStatus: null,
  updateToken: token => set(() => ({ token: token })),
  updateresStatus: resStatus => set(() => ({ resStatus: resStatus })),
}));
