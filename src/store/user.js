import { defineStore } from "pinia";
// defineStore =>use开头的组合式函数
import { getLoginImageKey, getStatusImage } from "../service";
import { useRequest } from "../hooks";

export const useUserStore = defineStore("user", {
  //state 必须是返回式函数
  state() {
    return {
      userCookie: "",
      userKey: "123456",
    };
  },
  getters: {},
  // mutations  被弃用
  actions: {
    updateCookie() {
      const { data: resKey } = useRequest(getLoginImageKey, {
        formatResult(response) {
          return response.data.data.unikey;
        },
      });
      this.userKey = resKey.value;
      console.log(this.userKey);
    },
  },
  persist: {
    key: "user_cookie",
    paths: ["userCookie"],
  },
});
