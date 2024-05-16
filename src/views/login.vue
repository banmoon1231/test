<template>
  <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
    <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
      <router-link to="/sup">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="0.44em"
            height="1em"
            viewBox="0 0 7 16"
            class="text-[6vw] iconify iconify--formkit"
          >
            <path
              fill="currentColor"
              d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            ></path>
          </svg>
        </div>
      </router-link>
      <div class="text-[4vw] text-[#696969]">游客登录</div>
    </div>
    <img
      src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
      alt=""
      class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
    />
    <div class="relative">
      <div v-show="code == 801">
        <img :src="getImage" class="w-[40vw] h-[40vw] m-auto relative z-[1]" />
        <!---->
        <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">
          使用<span class="text-[#2C6AA1] mx-[1.5vw]">网易云音乐APP</span
          >扫码登录
        </div>
      </div>
      <div v-show="code == 802">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/queding.png"
          alt=""
          class="h-[41vw] mx-auto"
        />
        <h1
          class="h-[17vw] leading-[17vw] text-center text-[4vw] text-[#04090C]"
        >
          扫描成功
        </h1>
        <p class="text-[#0F1619] text-[3.4vw] text-center">
          请在手机上确认登录
        </p>
      </div>
    </div>
    <div class="fixed bottom-0">
      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
        alt=""
        class="w-[100vw]"
      />
    </div>
  </div>
</template>
<script setup>
// import { ref } from "vue";
import { onMounted, onUpdated, watchEffect, onUnmounted } from "vue";
import { useRequest } from "../hooks";
import { useRouter } from "vue-router";
// import { createPinia } from "pinia";
// import PersistPlugin from "pinia-plugin-persistedstate";
// import { defineStore } from "pinia";

import {
  getLoginImageKey,
  getLoginImage,
  getStatusImage,
} from "../service/index";

// import { useRequest } from "../hooks";
// const { data: unikey } = useRequest(getLoginImageKey, {
//   formatResult(response) {
//     return response.data.data.unikey;
//   },

// });
// 时间戳

const resKey = ref();
const router = useRouter();
// resKey.value = unikey;
// console.log(unikey);
// const { data: getImage } = useRequest(() =>
//   getLoginImage(
//     { key: resKey.value, qrimg: "1" },
//     {
//       formatResult(response) {
//         return response.data.data.qrimg;
//       },
//     }
//   )
// );
// console.log(getImage);
// // 二维码状态
// // const { data: status } = useRequest(() => getStatusImage({ key: unikey }));
// // console.log(status);
// (async () => {
//   const res = await getStatusImage({ key: unikey });
//   console.log(res);
// })();
const getImage = ref();
// 获取当前时间戳
const getTime = new Date();
const getNewTime = ref();
getNewTime.value = getTime.getTime();
(async () => {
  try {
    // key
    const res = await getLoginImageKey();
    resKey.value = res.data.data.unikey;

    // 图片
    const resBase64 = await getLoginImage({
      key: res.data.data.unikey,
      qrimg: "1",
    });
    getImage.value = resBase64.data.data.qrimg;

    console.log(resKey.value);
    //
    const resStatus = await getStatusImage({
      key: resKey.value,
      timestamp: getNewTime?.value,
    });
    console.log(resStatus);
  } catch (error) {
    console.log(error);
  }
})();

// console.log(dataStatus);
const loading = ref(true);
const error = ref(false);
const data = ref(null);
let intervalId; // 用于存储轮询的定时器ID

// const store = createPinia();
// store.use(PersistPlugin);
const code = ref();
const poll = () => {
  getNewTime.value = new Date().getTime();
  getStatusImage({ key: resKey.value, timestamp: getNewTime?.value })
    .then((response) => {
      const status = response.data.code;
      code.value = response.data.code;
      if (status === 800) {
        // 二维码过期
        clearInterval(intervalId); // 清除轮询
        error.value = true; // 设置错误状态
      } else if (status === 803) {
        // 授权登录成功
        console.log(response.data.cookie);
        localStorage.setItem("userCookie", response.data.cookie);
        router.push("/personalCenter");
        clearInterval(intervalId); // 清除轮询
      }
    })
    .catch(() => {
      clearInterval(intervalId); // 清除轮询
      error.value = true; // 设置错误状态
    })
    .finally(() => {
      loading.value = false; // 数据加载完成后，无论成功或失败，都设置loading为false
    });
};

onMounted(() => {
  poll(); // 组件挂载后立即执行轮询
  intervalId = setInterval(poll, 1000); // 每5秒执行一次轮询函数
});

onUnmounted(() => {
  clearInterval(intervalId); // 组件卸载时清除轮询
});

/// 存储cookie
</script>
