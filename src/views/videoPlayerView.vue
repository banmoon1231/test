<template>
  <div
    class="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap absolute pb-[12vw]"
  >
    <div
      class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]"
    >
      <router-link to="/Mv">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          class="text-[6vw] text-[#fefefe] iconify iconify--ep"
        >
          <g transform="rotate(-90 512 512)">
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
            ></path>
          </g>
        </svg>
      </router-link>
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
        >
          <path
            fill="currentColor"
            d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75zM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="text-[6vw] text-[#fefefe] iconify iconify--ri"
        >
          <path
            fill="currentColor"
            d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 播放视频 -->
    <div class="w-[100%] h-[54vw] absolute top-[12%]">
      <div>
        <!-- 确保video元素有一个特定的ID，供Plyr初始化时使用 -->
        <video id="player" playsinline controls muted autoplay>
          <source :src="videoUrl?.url" type="video/mp4" />
          <!-- 如果有其他视频格式，可以添加额外的source元素 -->
        </video>
      </div>
    </div>
    <div class="w-[100%] flex items-center relative">
      <div class="flex-1 mr-[10vw] p-[3.2vw] absolute bottom-0">
        <div class="flex items-center mb-[3vw]">
          <div>
            <img
              :src="artistName?.cover"
              alt=""
              class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]"
            />
          </div>
          <div class="mx-[2vw] text-[#ffffff] text-[4vw]">
            {{ artistName?.artistName }}
          </div>
          <div
            class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="text-[#fff] text-[4vw] iconify iconify--mingcute"
            >
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                ></path>
                <path
                  fill="currentColor"
                  d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="text-[#ACACAC] flex items-center">
          <span
            class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
            >MV</span
          >
          <span class="text-[3.2vw]">{{ artistName?.name }} </span>
          <span
            class="icon-[bytesize--chevron-bottom] ml-[35vw] text-[3.2vw]"
            style="color: white"
          ></span>
        </div>
        <div class="flex items-center">
          <span class="icon-[ri--music-fill]" style="color: white"></span>
          <div class="w-[34vw]">
            <van-notice-bar
              scrollable
              background="black"
              :text="artistName?.name"
              color="#e8e8e8"
              speed="30"
            >
            </van-notice-bar>
          </div>
          <span
            class="icon-[icon-park-outline--like]"
            style="color: white"
          ></span>
        </div>
      </div>
      <div class="w-[10vw] absolute right-0">
        <div class="flex items-center flex-wrap justify-center mb-[4vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
          >
            <path
              fill="currentColor"
              d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"
            ></path>
          </svg>
          <span class="text-[#eaeaea] text-[3vw]">13754</span>
        </div>
        <div class="flex items-center flex-wrap justify-center mb-[4vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--uis"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4c.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S17.5 2 12 2M8 13c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"
            ></path>
          </svg>
          <span class="text-[#eaeaea] text-[3vw]">2705</span>
        </div>
        <div class="flex items-center flex-wrap justify-center mb-[4vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--majesticons"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z"
            ></path>
          </svg>
          <span class="text-[#eaeaea] text-[3vw]">61342</span>
        </div>
        <div class="flex items-center flex-wrap justify-center mb-[4vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--fluent"
          >
            <path
              fill="currentColor"
              d="M9.113 8.8c.34-.297.744-.526 1.19-.661l.247-.065l.16-.03l.176-.025l.18-.015l.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v7.5a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-7.5a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5l.003-.149l.014-.19l.026-.191l.036-.186l.059-.223l.08-.236l.087-.202l.082-.162l.094-.163l.146-.217l.094-.123l.135-.156l.108-.112zM15 11a.75.75 0 0 0-.743.648l-.007.102v2.499h-2.5a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743l.102.007h2.5v2.501c0 .38.282.694.648.743L15 19a.75.75 0 0 0 .743-.648l.007-.102v-2.501h2.5a.75.75 0 0 0 .743-.649L19 15a.75.75 0 0 0-.648-.743l-.102-.007h-2.5v-2.5a.75.75 0 0 0-.648-.743zm.582-6.767l.052.177l.694 2.588H11.25A4.25 4.25 0 0 0 7 11.249v6.434a3.25 3.25 0 0 1-2.895-2.228l-.052-.176l-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052l7.244-1.941a3.25 3.25 0 0 1 3.928 2.12"
            ></path>
          </svg>
          <span class="text-[#eaeaea] text-[3vw]">收藏</span>
        </div>
        <div class="relative flex items-center justify-center">
          <img
            src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
            alt=""
            class="w-[10vw] h-[10vw] rounded-[50%]"
          />
          <img
            alt=""
            class="w-[7vw] h-[7vw] rounded-[50%] absolute rotate-animation"
            :src="artistName?.cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { getVidoeUrl, getMvCharts } from "@/service";
import { useRequest } from "@/hooks";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
const route = useRoute();
const videoId = ref(route.query.id);
const setupPlayer = () => {
  const player = new Plyr("#player");
};
onMounted(() => {
  console.log(videoId.value);
});
const { data: videoUrl } = useRequest(
  () => getVidoeUrl({ id: videoId.value }),
  {
    formatResult(response) {
      return response.data.data;
    },
  }
);
const { data: MvAll } = useRequest(() => getMvCharts(), {
  formatResult(response) {
    return response.data.data;
  },
});
var artistName;
const name = async () => {
  const res = await getMvCharts();
  const res2 = await getVidoeUrl({ id: videoId.value });
  return res.data.data.find((obj) => obj.id === res2.data.data.id);
  // artistName = artName;
  // console.log(artName);
};
name().then((res) => {
  artistName = res;
  console.log(artistName);
});
console.log(artistName);
// console.log(name());

console.log(MvAll);
console.log(videoUrl);
onMounted(() => {
  setupPlayer();
});

// console.log(videoId);
</script>
<style scoped>
@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate-animation {
  animation: rotateAnimation 5s linear infinite; /* 持续时间、速度曲线和迭代次数 */
}
</style>
