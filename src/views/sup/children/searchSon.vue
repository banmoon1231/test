<template>
  <div class="bg-[#F4F4F4] dark:bg-[#1a1c23] h-[100vh] overflow-auto pb-[12vw]">
    <div>son:{{ message }}</div>
    <div class="w-[91vw] h-[20vw] mx-auto flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="8vw"
        height="8vw"
        viewBox="0 0 256 256"
        class="text-[#000] dark:text-[#e9e9e9] iconify iconify--ph"
      >
        <path
          fill="currentColor"
          d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
        ></path>
      </svg>
      <div class="relative">
        <label for=""
          ><input
            placeholder="Beyond"
            type="text"
            class="dark:border-2 dark:border-[#31333a] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[3vw] pl-[11vw] bg-white opacity-0.2 text-[#9b9b9b] w-[72vw] h-[10vw] border-2 border-[#fff] rounded-[25px]"
        /></label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="4.3vw"
          height="4.3vw"
          viewBox="0 0 24 24"
          class="absolute left-[3.68vw] top-[3vw] text-[#000] dark:text-[#e9e9e9] iconify iconify--tabler"
          style="color: rgb(111, 119, 143)"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          ></path>
        </svg>
        <!---->
      </div>
      <div
        class="font-semibold text-[3.7vw] dark:text-[#e9e9e9] text-[#283349]"
      >
        搜索
      </div>
    </div>
    <div class="flex mt-[3vw]">
      <div>
        <ul class="flex items-center justify-between">
          <li
            class="flex justify-center items-center w-[25vw] border-r-[0.4vw] border-r-[#e3e5ea]"
          >
            <span
              class="icon-[material-symbols--person] w-[5vw] h-[5vw] text-[red]"
            ></span>
            <span class="text-[3.4vw] font-[800] ml-[2vw]">歌手</span>
          </li>
          <li
            class="flex justify-center items-center w-[25vw] border-r-[0.4vw] border-r-[#e3e5ea]"
          >
            <span
              class="icon-[ph--book-fill] w-[5vw] h-[5vw] text-[red]"
            ></span>
            <span class="text-[3.4vw] font-[800] ml-[2vw]">曲风</span>
          </li>
          <li
            class="flex justify-center items-center w-[25vw] border-r-[0.4vw] border-r-[#e3e5ea]"
          >
            <span
              class="icon-[fluent-emoji-high-contrast--musical-notes] w-[5vw] h-[5vw] text-[red]"
            ></span>
            <span class="text-[3.4vw] font-[800] ml-[2vw]">专区</span>
          </li>
          <li
            class="flex justify-center items-center w-[25vw] border-r-[0.4vw] border-r-[#e3e5ea]"
          >
            <span
              class="icon-[mdi--microphone] w-[5vw] h-[5vw] text-[red]"
            ></span>
            <span class="text-[3.4vw] font-[800] ml-[2vw]">识曲</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div>
      <div class="px-[3vw] flex items-center justify-between">
        <span
          class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]"
          >猜你喜欢</span
        >
        <span class="icon-[grommet-icons--power-reset] text-[#ccc]"></span>
      </div>
      <div>
        <ul class="flex items-center flex-wrap px-[3vw]">
          <li
            class="p-[3vw] rounded-[20px] bg-white mt-[3vw] text-[3.5vw] text-[#535c6a] mr-[2vw]"
          >
            如果可以
          </li>
          <li
            class="p-[3vw] rounded-[20px] bg-white mt-[3vw] text-[3.5vw] text-[#535c6a] mr-[2vw]"
          >
            根本你不懂得爱我
          </li>
          <li
            class="p-[3vw] rounded-[20px] bg-white mt-[3vw] text-[3.5vw] text-[#535c6a] mr-[2vw]"
          >
            妈妈的二十岁 海洋bo
          </li>
          <li
            class="p-[3vw] rounded-[20px] bg-white mt-[3vw] text-[3.5vw] text-[#535c6a] mr-[2vw]"
          >
            还是会想你
          </li>
          <li
            class="p-[3vw] rounded-[20px] bg-white mt-[3vw] text-[3.5vw] text-[#535c6a] mr-[2vw]"
          >
            爱你
          </li>
        </ul>
      </div>
    </div>
    <!-- 排行榜 -->
    <BetterScroll :option="{ scrollX: true, click: true }">
      <div class="flex items-center">
        <div
          class="w-[61vw] bg-[#fff] dark:bg-[#31333a] rounded-[2vw] ml-[2.344vw] h-[150vw]"
          v-for="item in chartsData"
          :key="item.id"
        >
          <div
            class="ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]"
          >
            <div class="text-[4vw] text-[#2a344b] mr-[3.359vw] ml-[4vw]">
              {{ item.name }}
            </div>
            <div
              class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
            >
              <span class="icon-[iconoir--play-solid]"></span>
              <span class="text-[2.6vw] text-[#323c52]">播放</span>
            </div>
          </div>
          <!-- 数据列表 -->
          <div>
            <a-list
              item-layout="horizontal"
              :data-source="musicData"
              :split="false"
            >
              <template #renderItem="{ item, index }">
                <a-list-item>
                  <a-list-item-meta :description="`${index + 1}.` + item.name">
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </div>
        </div>
      </div>
    </BetterScroll>
  </div>
</template>
<script>
import BetterScroll from "../../../components/BetterScroll.vue";
import { theCharts, theChartsList } from "../../../service";
import { useRequest } from "../../../hooks";
// 什么是异步依赖
// async setup()
const delay = (time = 3000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据加载完成！");
    }, time);
  });
};
import { ref, watch } from "vue";
export default {
  components: { BetterScroll },
  async setup() {
    const message = ref("");
    const chartsData = ref([]);
    const musicData = ref([]);
    const musicId = ref();
    message.value = await delay(3000);
    // const { data, loading, error } = useRequest(theCharts);
    const res = await theCharts();
    chartsData.value = res.data.list;
    console.log(res);
    const resAll = await theChartsList({ id: "19723756", limit: 20 });
    console.log(resAll);
    musicData.value = resAll.data.songs;
    // watch(searchDetail, (newVal) => {
    //   newVal.forEach((item) => {
    //     if (!PlaylistDetail[item.id]) {
    //       // 这里调用fetchPlaylistDetail并更新PlaylistDetail对象
    //       PlaylistDetail[item.id] = fetchPlaylistDetail(item.id);
    //     }
    //   });
    // });

    // 获取榜单上前20首歌

    return { message, chartsData, musicData };
  },
};
</script>
