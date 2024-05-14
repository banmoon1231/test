<template>
  <div
    :style="`background:rgb(${bgcolor1},${bgcolor2},${bgcolor3})`"
    class="w-[100vw] h-[100vh]"
  >
    <van-sticky>
      <div
        class="flex justify-between text-white h-[13.5vw] items-center p-[4vw]"
        :style="`background:rgb(${bgcolor1},${bgcolor2},${bgcolor3})`"
      >
        <div class="flex items-center">
          <router-link to="/sup">
            <span class="icon-[tabler--arrow-left] text-[7vw]"></span>
          </router-link>
          <span class="ml-[4.7vw] text-[4.2vw]" v-show="isShowSongs">歌单</span>
          <div
            v-show="isShow"
            class="w-[42vw] h-[13.5vw] overflow-hidden leading-[13.5vw]"
          >
            <van-notice-bar
              scrollable
              :text="getRecommendArterInfo?.name"
              delay="2"
              speed="30"
              color="#fff"
              :style="`background:rgb(${bgcolor1},${bgcolor2},${bgcolor3});margin-top:1vw;`"
            >
            </van-notice-bar>
          </div>
          <div
            v-show="isShow"
            class="px-[2vw] flex items-center justify-center h-[7vw] rounded-[20px] text-[#f8fefe] text-[3vw] ml-[5vw] font-semibold opacity-50 bg-opacity-20 bg-[#fff]"
          >
            <svg
              data-v-32bd4a63=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="text-[5vw] mr-[1vw] iconify iconify--mdi"
              style="color: white"
            >
              <path
                fill="currentColor"
                d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"
              ></path>
            </svg>
            收藏
          </div>
        </div>
        <div class="flex items-center">
          <span class="icon-[ic--twotone-search] mr-[5vw] text-[7vw]"></span>
          <span
            class="icon-[ph--dots-three-outline-vertical-fill] text-[7vw]"
          ></span>
        </div>
      </div>
    </van-sticky>
    <div class="p-[4vw]">
      <div class="flex items-center justify-between">
        <div class="w-[24vw] h-[25vw] pt-[1vw] relative" v-show="notShowMore">
          <img
            :src="getRecommendArterInfo?.coverImgUrl"
            alt=""
            class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]"
          />
        </div>
        <div class="w-[67vw] pr-[12vw] relative">
          <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
            {{ getRecommendArterInfo?.name }}
          </p>
          <div class="h-[10.5vw] flex items-center" v-show="notShowMore">
            <img
              alt=""
              class="w-[6vw] h-[6vw] rounded-[50%]"
              src="http://p1.music.126.net/NM5a9R71DwjuA3yksRopHw==/109951166599618601.jpg"
            />
            <span
              class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50"
            >
              {{ getRecommendArterInfo?.creator.nickname }}</span
            >
            <span
              class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-[4vw] text-[#fff] iconify iconify--material-symbols"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                ></path></svg
              >关注
            </span>
          </div>
          <div class="flex" v-show="notShowMore">
            <div
              v-for="item in getRecommendArterInfo?.tags"
              :key="item.id"
              class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]"
            >
              <span class="text-[2.2vw]">{{ item }} </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="text-[3vw] ml-[0.6vw] iconify iconify--ep"
                style="color: white"
              >
                <g transform="rotate(90 512 512)">
                  <path
                    fill="currentColor"
                    d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            v-show="true"
            class="absolute right-0 w-[6vw] h-[6vw] rounded-full bg-orange top-0 bg-opacity-20 bg-[#fff]"
          >
            <span
              @click="showMoreSongs"
              class="icon-[mingcute--down-line] text-[#fff] w-[6vw] h-[6vw]"
            ></span>
          </div>
        </div>
      </div>
      <div v-show="isShowMore">
        <div>
          <span
            class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]"
            >喜欢这个歌单的用户也听了</span
          >
        </div>
        <BetterScroll :option="{ scrollX: true, click: true }">
          <div class="flex">
            <div
              class="w-[28vw] h-[38vw] rounded-[8px] overflow-hidden relative pt-[1vw] mr-[2vw]"
              v-for="item in elseSongs"
              :key="item.id"
            >
              <img
                :src="item.picUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]"
              />
              <p class="text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                {{ item.name }}
              </p>
            </div>
          </div>
        </BetterScroll>
      </div>
      <div
        class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between"
      >
        <div
          class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden"
        >
          {{ getRecommendArterInfo?.description }}
        </div>
        <span class="icon-[mingcute--right-line] text-[5vw] text-[#fff]"></span>
      </div>
      <div class="flex items-center mt-[3.5vw]">
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons"
            style="color: white"
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
          {{ getRecommendArterInfo?.shareCount }}
        </div>
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design"
            style="color: white"
          >
            <path
              fill="currentColor"
              d="M924.3 338.4a447.6 447.6 0 0 0-96.1-143.3a443.1 443.1 0 0 0-143-96.3A443.9 443.9 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.1 444.1 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.9 449.9 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.7 447.7 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6M312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48"
            ></path>
          </svg>
          {{ getRecommendArterInfo?.commentCount }}
        </div>
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[5vw] mr-[1.8vw] iconify iconify--mdi"
            style="color: white"
          >
            <path
              fill="currentColor"
              d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"
            ></path></svg
          >{{ Math.round(getRecommendArterInfo?.subscribedCount / 10000) }}万
        </div>
      </div>
    </div>
    <div
      class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[2.5vw] px-[3.8vw]"
    >
      <nav class="a1 h-[13vw] flex items-center justify-between">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            class="text-[#ED3E20] text-[8vw] iconify iconify--heroicons-solid"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]"
            >播放全部</span
          >
          <span class="text-[#8C9094] text-[2.7vw]"
            >({{ allSongs?.length }} )</span
          >
        </div>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
            class="text-[5vw] text-[#2C3034] iconify iconify--clarity"
          >
            <path
              fill="currentColor"
              d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2"
              class="clr-i-outline clr-i-outline-path-1"
            ></path>
            <path
              fill="currentColor"
              d="m18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"
              class="clr-i-outline clr-i-outline-path-2"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2 13.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>

      <div
        class="flex items-center h-[14vw]"
        v-for="(item, index) in allSongs"
        :key="item.id"
      >
        <div
          class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium"
        >
          {{ index + 1 }}
        </div>
        <div class="font-medium text-[3.6vw] w-[64vw]">
          <router-link
            :to="`/playMusic/${songsId}/${item.ar[0].name}?id=${item.id}`"
          >
            <div
              class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]"
            >
              <span class="text-ellipsis text-[#000]">{{ item.name }}</span>
              <!---->
            </div>
          </router-link>
          <div
            class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center"
          >
            <span
              class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]"
              >vip</span
            >
            <span
              class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]"
              >试听</span
            >
            <span>{{ item.ar[0]?.name }}-{{ item.al.name }}</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--arcticons"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24 5.5C39 5.5 42.5 9 42.5 24S39 42.5 24 42.5S5.5 39 5.5 24S9 5.5 24 5.5"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.77 24c0-10.376-.264-10.224 8.723-5.036s8.986 4.884 0 10.072S16.77 34.376 16.77 24"
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
          class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--ri"
        >
          <path
            fill="currentColor"
            d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getRecommendArter, getAllSongsById, recommendSong } from "@/service";
import { useRequest } from "@/hooks";
import { useRoute } from "vue-router";
import BetterScroll from "../components/BetterScroll.vue";
const route = useRoute();
const songsId = ref(route.query.id);
const bgcolor1 = ref(Math.round(Math.random() * 255));
const bgcolor2 = ref(Math.round(Math.random() * 255));
const bgcolor3 = ref(Math.round(Math.random() * 255));
const { data: getRecommendArterInfo } = useRequest(
  () => getRecommendArter({ id: songsId.value }),
  {
    formatResult(response) {
      return response.data.playlist;
    },
  }
);
console.log(getRecommendArterInfo);
const { data: allSongs } = useRequest(
  () => getAllSongsById({ id: songsId.value }),
  {
    formatResult(response) {
      return response.data.songs;
    },
  }
);
const isShow = ref(false);
const isShowSongs = ref(true);
window.addEventListener("scroll", function (e) {
  //   console.log(window.scrollY);
  if (window.scrollY > 0) {
    isShow.value = true;
    isShowSongs.value = false;
  }
  if (window.scrollY === 0) {
    isShow.value = false;
    isShowSongs.value = true;
  }
});

// 点击下箭头展示更多歌单
const notShowMore = ref(true);
const isShowMore = ref(false);
const flag = ref(false);
const showMoreSongs = () => {
  if (flag.value == false) {
    isShowMore.value = true;
    notShowMore.value = false;
    flag.value = true;
  } else {
    isShowMore.value = false;
    notShowMore.value = true;
    flag.value = false;
  }
};

const { data: elseSongs } = useRequest(() => recommendSong({ limt: 5 }), {
  formatResult(response) {
    return response.data.result;
  },
});
console.log(elseSongs);
</script>
