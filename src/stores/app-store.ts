import { defineStore } from 'pinia';

interface IAuth {
  isLogin: boolean;
  token: string | null;
  dateTime: Date | null;
}

interface ISport {
  kagan: string | null,
  gorkem: string | null,
  yigitcan: boolean
}

export const useAppStore = defineStore('app', {
  state: () =>
    ({
      auth: {
        isLogin: false,
        token: null,
        dateTime: null,
      } as IAuth,
      sportData: {
        kagan: null,
        gorkem: null,
        yigitcan: false
      } as ISport,
    }),

  getters: {
    isLogin(state) {
      return state.auth.isLogin;
    },
    kaganDeger(state) {
      return state.sportData.kagan;
    },
    gorkemDeger(state) {
      return state.sportData.gorkem;
    },
    yigitcanMi(state) {
      return state.sportData.yigitcan ? 'dorudur' : 'yalansa doğru diyin';
    }
  },

  actions: {
    setAuth(token: null | string) {
      if (token === null) {
        this.auth = {
          isLogin: false,
          token: null,
          dateTime: null,
        };
      } else {
        this.auth = {
          isLogin: true,
          token: token,
          dateTime: new Date(),
        };
      }
    },
    kaganGuncelle(deger: null | string) {
      this.sportData = {
        kagan: deger,
        gorkem: deger,
        yigitcan: false
      }
    }
  },
});
