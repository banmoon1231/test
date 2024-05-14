<template>
  <div>
    <div
      class="w-[100vw] h-[100vh] blur-background"
      :style="`background-image: url(${getAllMusicList[0]?.al?.picUrl})`"
    ></div>
    <div class="mask w-[100vw] h-[100vh]">
      <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
        <div
          class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between"
        >
          <router-link :to="`/recommdSongs?id=${musicListAll}`">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff] iconify iconify--ep"
              >
                <g transform="rotate(180 512 allSongs512)">
                  <path
                    fill="currentColor"
                    d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
                  ></path>
                </g>
              </svg>
            </div>
          </router-link>
          <div class="text-center w-[60vw] mt-[4vw]">
            <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
              {{ getAllMusicList[0]?.name }}
            </p>
            <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
              {{ musicArtist }}
              <span
                class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
                >关注</span
              >
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            class="text-[6vw] text-[#fff] iconify iconify--carbon"
          >
            <path
              fill="currentColor"
              d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.8 4.8 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.8 4.8 0 0 0 18 25a5 5 0 1 0 5-5m0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3M7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3m16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3"
            ></path>
          </svg>
        </div>
        <div
          class="relative top-[2%] w-[100vw] h-[120vw]"
          v-show="!isShowWords"
          @click="isShowWords = true"
        >
          <div
            class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
            style="transform: rotate(-45deg)"
          >
            <img
              src=""
              alt=""
              class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
            />
          </div>
          <div
            class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
          >
            <div class="absolute w-[80vw] h-[80vw]">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
                class="transition-all duration-[800ms] origin-top-left"
                :class="
                  showPause
                    ? 'h-[40vw] absolute top-[-20.2vw] right-[15vw] z-10 '
                    : 'h-[40vw] absolute top-[-20.2vw] right-[15vw] z-10  rotate-[-45deg]'
                "
                alt=""
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                class="absolute top-0 w-[80vw] h-[80vw]"
                :class="showPause ? 'animate-[spin_5s_linear_infinite]' : ''"
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
                class="w-[80vw] h-[80vw] absolute top-0"
                :class="showPause ? 'animate-[spin_5s_linear_infinite]' : ''"
              />
            </div>
            <img
              alt=""
              class="w-[50vw] h-[50vw] absolute left-[15.2vw] top-[15.2vw] rounded-[50%] border-[5px] border-[#000] rotateAnimation1 paused-animation"
              :class="showPause ? 'animate-[spin_5s_linear_infinite]' : ''"
              :src="getAllMusicList[0]?.al?.picUrl"
            />
          </div>
          <!-- 图标 -->
          <div
            class="w-[100vw] mt-[5vw] flex justify-evenly items-center mb-[3vw] absolute bottom-0"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="text-[6vw] text-[#fff] iconify iconify--ant-design"
              >
                <path
                  fill="currentColor"
                  d="M923 283.6a260 260 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.3 265.3 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39q-15 9.15-28.5 20.1q-13.5-10.95-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.4 258.4 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9M512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3"
                ></path>
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
              class="text-[5vw] text-[#fff] iconify iconify--streamline"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m4 7l3 3.5L10 7m-3 3.5v-7"></path>
                <circle cx="7" cy="7" r="6.5"></circle>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              class="text-[5vw] text-[#fff] iconify iconify--carbon"
            >
              <path
                fill="currentColor"
                d="M30 30h-2v-5a5.006 5.006 0 0 0-5-5v-2a7.01 7.01 0 0 1 7 7zm-8 0h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM20 2v2a5 5 0 0 1 0 10v2a7 7 0 0 0 0-14m-8 2a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"
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
              class="text-[6vw] text-[#fff] iconify iconify--uil"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20m5-9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-2 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M9 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2"
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
              class="text-[6vw] text-[#fff] iconify iconify--ri"
            >
              <path
                fill="currentColor"
                d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"
              ></path>
            </svg>
          </div>
        </div>
        <!-- 歌词 -->
        <div
          class="w-[100vw] h-[130vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
          v-show="isShowWords"
          @click="isShowWords = false"
        >
          <div class="absolute top-0 transition-all duration-1000">
            <p
              v-for="(text, time) in parsedLyrics"
              :key="time"
              class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
            >
              <span
                :class="
                  currentTime <= convertTimeToSeconds(time) ? 'text-white' : ''
                "
                >{{ text }}</span
              >
            </p>
          </div>
        </div>

        <!---->
        <div class="flex flex-wrap content-end">
          <div class="hidden">
            <div class="flex items-center justify-center mt-[5vw]">
              <audio
                id="audioPlayer"
                controls
                loop
                style="background: transparent"
                ref="audioPlayer"
                @timeupdate="updateProgress"
              >
                <source :src="musicUrl?.data.data[0].url" type="audio/mp3" />
              </audio>
            </div>
          </div>
          <!-- 进度条 -->
          <div class="flex items-center justify-center w-[100vw] mt-[2vw]">
            <div class="text-[#fff] text-[2.6vw] scale-[0.8] opacity-80">
              {{
                currentTime.toFixed(1) > 60
                  ? (currentTime / 60).toFixed(1)
                  : currentTime.toFixed(1)
              }}
            </div>
            <div class="w-[80vw] mx-[2vw]">
              <van-slider
                v-model="progress"
                :min="0"
                :max="100"
                button-size="8"
                @update:model-value="seekAudio"
              >
              </van-slider>
            </div>
            <div class="text-[#fff] text-[2.6vw] scale-[0.8] opacity-50">
              {{
                duration > 60 ? (duration / 60).toFixed(2) : duration.toFixed(1)
              }}
            </div>
          </div>

          <div class="w-[100vw] text-white mt-[4vw]">
            <div class="flex items-center justify-between px-[3.5vw] w-[100vw]">
              <span
                class="icon-[teenyicons--loop-outline] w-[6vw] h-[6vw]"
              ></span>
              <span class="icon-[ion--play-skip-back] w-[6vw] h-[6vw]"></span>
              <div
                class="w-[12vw] h-[12vw] bg-white rounded-full relative text-black"
                @click="playAudio"
                v-show="showPlay"
              >
                <span
                  class="icon-[ion--play] w-[6vw] h-[6vw] absolute left-[3.5vw] top-[50%] translate-y-[-50%]"
                ></span>
              </div>
              <div
                class="w-[12vw] h-[12vw] bg-white rounded-full relative text-black"
                @click="playAudio"
                v-show="showPause"
              >
                <span
                  class="icon-[ic--round-pause] w-[6vw] h-[6vw] absolute left-[3.5vw] top-[50%] translate-y-[-50%]"
                ></span>
              </div>
              <span
                class="icon-[ion--play-skip-forward] w-[6vw] h-[6vw]"
              ></span>
              <span
                class="icon-[ri--play-list-2-fill] w-[6vw] h-[6vw]"
                @click="isShowAllMusic = true"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="musicListMask w-[100vw] h-[100vh]"
        v-show="isShowAllMusic"
        @click="isShowAllMusic = false"
      >
        <div
          class="rounded-t-[20px] px-[5.4vw] van-popup van-popup--bottom bg-white absolute bottom-0 w-[100vw] z-30"
        >
          <div class="py-[6vw]">
            <div class="text-[4vw] font-extrabold">
              <span>当前播放</span><span>()</span>
            </div>
            <div
              class="flex items-center justify-between mt-[6.6vw] text-[5vw] text-[#ccc]"
            >
              <div class="flex items-center">
                <span class="icon-[teenyicons--loop-outline]"></span>
                <span class="ml-[1.5vw] text-[3.4vw]">列表循环</span>
              </div>
              <div class="flex w-[30vw] justify-between">
                <span class="icon-[material-symbols--download]"></span>
                <span class="icon-[fluent--collections-20-regular]"></span>
                <span
                  class="icon-[material-symbols-light--delete-outline]"
                ></span>
              </div>
            </div>
            <div class="h-[50vh] overflow-hidden">
              <div v-for="item in getAllMusicList" :key="item.id">
                <div
                  class="flex justify-between items-center h-[14vw]"
                  @click="getMusicId(item.al.id, event)"
                >
                  <div
                    :class="item.al.id == getMusicIdOne ? 'text-red-500' : ''"
                  >
                    <span
                      v-show="item.al.id == getMusicIdOne"
                      class="icon-[svg-spinners--bars-scale] text-red-500"
                    ></span>
                    <span>{{ item.name }}</span>
                    <span
                      class="text-[3vw]"
                      :class="
                        item.al.id == getMusicIdOne
                          ? 'text-red-500'
                          : 'text-[#BCBCBC]'
                      "
                      >-{{ item.ar[0].name }}
                    </span>
                  </div>
                  <div class="flex items-center">
                    <span
                      class="text-[3vw] mr-[6vw] text-[#BCBCBC]"
                      v-show="item.al.id == getMusicIdOne"
                      >播放来源</span
                    >
                    <span class="icon-[ic--round-close] text-[#BCBCBC]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRequest } from "@/hooks";
import {
  ref,
  onMounted,
  watchEffect,
  onUnmounted,
  onUpdated,
  nextTick,
  computed,
} from "vue";
import {
  getMusicUrl,
  getRecommendArter,
  getAllSongsById,
  musicWords,
} from "@/service";
import { useRoute } from "vue-router";

import Plyr from "plyr";
import { resolveTypeElements } from "vue/compiler-sfc";

const wrapper = ref(null);

const route = useRoute();

const musicId = ref(route.query.id);

// 歌单全部歌曲id
const musicListAll = ref(route.params.List);
console.log(musicListAll.value);
// 歌手姓名
const musicArtist = ref(route.params.name);

console.log(musicId.value);
const { data: musicUrl } = useRequest(() =>
  getMusicUrl(
    { id: musicId.value, level: "exhigh" },
    {
      formatResult(response) {
        return response.data.data;
      },
    }
  )
);
const { data: getMusicList } = useRequest(() =>
  getRecommendArter({ id: musicId.value })
);

const { data: getAllMusicList } = useRequest(
  () => getAllSongsById({ id: musicListAll.value }),
  {
    formatResult(response) {
      return response.data.songs;
    },
  }
);
console.log(getAllMusicList);
console.log(getMusicList);
console.log(musicUrl);
// 获取当前播放时间
const currentTime = ref(0);
// 获取音乐总时间
const duration = ref(0);
let player;
onMounted(() => {
  player = new Plyr("#audioPlayer");
  player.on("timeupdate", () => {
    // 播放器准备好后获取总时长
    duration.value = player.duration;
  });
  console.log(player);

  // 监听时间更新事件
  player.on("timeupdate", () => {
    // 更新当前播放时间
    currentTime.value = player.currentTime;
  });
});

// 播放音乐
const showPlay = ref(true);
const showPause = ref(false);

const isPlayAudio = ref(false);
const playAudio = () => {
  if (isPlayAudio.value == false) {
    audioPlayer.play();
    isPlayAudio.value = true;
    showPlay.value = false;
    showPause.value = true;
  } else {
    audioPlayer.pause();
    isPlayAudio.value = false;
    showPlay.value = true;
    showPause.value = false;
  }
};
// 进度条
const progress = ref(0);

const updateProgress = (event) => {
  const audio = audioPlayer;
  const rawProgress = ((audio.currentTime / audio.duration) * 100).toFixed(1);
  progress.value = isNaN(Number(rawProgress)) ? 0 : Number(rawProgress);
  if (audio.currentTime === audio.duration && player.loop) {
    showPause.value = false;
    showPlay.value = true;
  }
};

const seekTime = ref(0);
const seekAudio = (val) => {
  player.currentTime = val;
};

// 获取点击的歌的id
const getMusicIdOne = ref();
const getMusicId = (val) => {
  getMusicIdOne.value = val;
};

// 是否展示更多音乐
const isShowAllMusic = ref(false);

// 获取歌词
const { data: musicWord } = useRequest(
  () => musicWords({ id: musicId.value }),
  {
    formatResult(response) {
      return response.data.lrc.lyric;
    },
  }
);

const wordMusic = ref(musicWord);
const isShowWords = ref(false);
const wordsArr = ref([]);
// console.log(typeof toString(musicWord));
// wordsArr.value = toString(musicWord).split("\n");
// console.log(musicWord.value.split("\n"));
let parsedLyrics;
onUpdated(() => {
  wordsArr.value = wordMusic.value.split("\n");
  console.log(wordsArr.value);
  parsedLyrics = parseLyricArray(wordsArr.value);
  console.log(parsedLyrics);
});
function parseLyricArray(lyricArray) {
  const lyricObject = {};

  lyricArray.forEach((line) => {
    // 匹配时间标签，例如 "[00:00.000]"，只获取时间部分
    const timeMatch = line.match(/\[(\d{2}:\d{2}\.\d{3})\]/);
    if (timeMatch) {
      const time = timeMatch[1];
      // 如果这一行是歌词，将时间作为键，歌词作为值存储到对象中
      const text = line.replace(timeMatch[0], "").trim();
      if (text) {
        lyricObject[time] = text;
      }
    } else {
      // 如果这一行不是歌词，可能是歌曲信息，如作词、作曲等
      const infoParts = line.split(" : ");
      if (infoParts.length === 2) {
        const key = infoParts[0].trim().toLowerCase();
        const value = infoParts[1].trim();
        lyricObject[key] = value;
      }
    }
  });

  return lyricObject;
}

// 将对象中的时间戳换成秒
function convertTimeToSeconds(timeString) {
  const [minutes, seconds] = timeString
    .split(":")
    .map((part) => parseFloat(part));
  const totalSeconds = minutes * 60 + seconds;
  return totalSeconds;
}

watchEffect(() => {
  console.log(currentTime.value);
});
</script>
<style scoped>
.blur-background {
  filter: blur(10px);
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
}
.musicListMask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  top: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
}
</style>
