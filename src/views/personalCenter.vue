<template>
  <div>
    <div class="w-[100vw] h-[74vw]">
      <div
        class="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10] text-white text-[7vw]"
      >
        <span class="icon-[mdi--arrow-left]"></span>
        <span class="icon-[ph--dots-three-vertical-bold]"></span>
      </div>
      <img
        src="https://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg"
        alt=""
        class="w-[100vw] h-[74vw]"
      />
    </div>
    <div class="bg-[#f1f1f1] px-[4vw] pb-[10vw] relative pt-[11vw]">
      <div class="bg-[#f1f1f1]">
        <div
          class="text-center absolute top-[-5vw] bg-[#f1f1f1] rounded-md w-[92vw]"
        >
          <div
            class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]"
          >
            <img :src="userAvatar" alt="" class="rounded-full" />
          </div>
          <div class="text-[5vw] text-[#253346] font-[800] mt-[13vw]">
            {{ userName }}
          </div>
          <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
            <span class="px-[2vw]"
              ><span>{{ userFocus }} </span> 关注</span
            ><span class="px-[2vw]"
              ><span>{{ userFans }} </span> 粉丝</span
            ><span class="px-[2vw]"
              >Lv.<span>{{ userLevel }} </span></span
            >
          </div>
          <div class="h-[11vw] flex items-center justify-center">
            <span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              >IP:</span
            ><span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="iconify iconify--ant-design text-[3vw] mr-[1vw] text-[#5c9bed]"
              >
                <path
                  fill="currentColor"
                  d="M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3c-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30M408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212s212 95.1 212 212s-95.1 212-212 212"
                ></path></svg
              >00后 摩羯座</span
            ><span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
              >村龄 5 年</span
            >
          </div>
          <div class="flex items-center justify-center">
            <span
              class="dark:border-[#383838] dark:text-[#EEEEEE] px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
              >编辑资料</span
            ><span
              class="dark:border-[#383838] dark:text-[#EEEEEE] w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="iconify iconify--ep dark:text-[#EEEEEE] text-[#41495E] text-[3vw] mt-[0.6vw]"
              >
                <g transform="rotate(180 512 512)">
                  <path
                    fill="currentColor"
                    d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
                  ></path>
                </g></svg
            ></span>
          </div>
        </div>
        <div class="pt-[29vw]">
          <nav
            class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto"
          >
            <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">
              主页
            </div>
            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
              动态
            </div>
            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
              播客
            </div>
            <div
              class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"
            ></div>
          </nav>
          <div
            class="dark:bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]"
          >
            <h1 class="dark:text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]">
              音乐品味
            </h1>
            <div class="flex justify-evenly">
              <div
                class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
              >
                <div
                  class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                >
                  我的喜欢
                </div>
                <p
                  class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                >
                  {{ userLoveSongs }}首
                </p>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    class="iconify iconify--ph mr-[0.8vw] text-[2.6vw]"
                    style="color: rgb(169, 170, 178)"
                  >
                    <path
                      fill="currentColor"
                      d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"
                    ></path></svg
                  >喜欢的音乐
                </div>
              </div>
              <div
                class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
              >
                <div
                  class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                >
                  累计听歌
                </div>
                <p
                  class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                >
                  {{ userListenSongs }}首
                </p>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="iconify iconify--ri mr-[0.8vw] text-[2.6vw]"
                    style="color: rgb(169, 170, 178)"
                  >
                    <path
                      fill="currentColor"
                      d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z"
                    ></path></svg
                  >喜欢的音乐
                </div>
              </div>
              <div
                class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]"
              >
                <div
                  class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                >
                  本周关键词
                </div>
                <p
                  class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                >
                  属于你的音乐档案
                </p>
                <div
                  class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="0.75em"
                    height="1em"
                    viewBox="0 0 384 512"
                    class="iconify iconify--fa-solid mr-[0.8vw] text-[2.6vw]"
                    style="color: rgb(169, 170, 178)"
                  >
                    <path
                      fill="currentColor"
                      d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64"
                    ></path></svg
                  >黑胶时光机
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
      >
        <p
          class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
        >
          创建的歌单<span
            class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
            >(0个)</span
          >
        </p>
        <ul class="px-[4vw] pb-[4vw]"></ul>
        <div></div>
      </div>
      <div
        class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
      >
        <p
          class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
        >
          收藏的歌单<span
            class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
            >(0个)</span
          >
        </p>
        <ul class="px-[4vw] pb-[4vw]"></ul>
        <div></div>
      </div>
      <div class="dark:bg-[#2C2C2C] w-[92vw] h-[50vw] bg-[#fff] rounded-[15px]">
        <nav class="h-[15vw] flex items-center justify-between mx-[3.8vw]">
          <div class="dark:text-[#ECECEC] text-[4vw] text-[#333]">基本信息</div>
          <div
            class="dark:text-[#ECECEC] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
          >
            领取村名证
          </div>
        </nav>
        <div
          class="dark:text-[#ADADAD] h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]"
        >
          <div class="w-[100%]">
            村龄：<span class="dark:text-[#E3E3E3]">5年 (2019年3月注册)</span>
          </div>
          <div class="w-[100%]">
            性别：<span class="dark:text-[#E3E3E3]">男</span>
          </div>
          <div class="w-[100%]">
            年龄：<span class="dark:text-[#E3E3E3]">00后 摩羯座</span>
          </div>
        </div>
        <div
          class="dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
        >
          查看全部<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="0.46em"
            height="1em"
            viewBox="0 0 208 456"
            class="iconify iconify--ps ml-[1vw] text-[2.5vw] font-[800]"
          >
            <path
              fill="currentColor"
              d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  getLoginStatus,
  getUserList,
  getUserInfo,
  getUserLevel,
  getUserFocus,
  getUserFans,
  getUserSongs,
} from "../service";
import { useRequest } from "vue-request";
import { onMounted, onUpdated, watchEffect } from "vue";
const cookies = localStorage.getItem("userCookie");

const userId = ref();
// 用户名称
const userName = ref();
// 用户头像
const userAvatar = ref();
// 用户等级
const userLevel = ref(0);
// 用户关注
const userFocus = ref(0);
// 用户粉丝
const userFans = ref(0);
// 用户喜欢的歌
const userLoveSongs = ref();
// 用户累计听歌
const userListenSongs = ref();
// 用户创建时间
const userCreateTime = ref();
(async () => {
  userId.value = (
    await getLoginStatus({ cookie: cookies })
  ).data.data.profile.userId;
  console.log(userId.value);
  const userInfo = await getUserInfo({ cookie: cookies });
  userName.value = userInfo.data.profile.nickname;
  userAvatar.value = userInfo.data.profile.avatarUrl;
  console.log(userAvatar.value);
  console.log(userInfo);
  userListenSongs.value = (
    await getUserList({
      uid: userId.value,
    })
  ).data.listenSongs;
  console.log(userListenSongs.value);
  // 用户等级
  userLevel.value = (await getUserLevel({ cookie: cookies })).data.data.level;
  userFocus.value = (
    await getUserFocus({ uid: userId.value })
  ).data.follow.length;
  console.log(userFocus.value);
  userFans.value = (
    await getUserFans({ uid: userId.value })
  ).data.follows?.length;
  console.log(userFans.value);
  userLoveSongs.value = (
    await getUserSongs({
      uid: userId.value,
      cookie: cookies,
    })
  ).data.playlist[0].trackCount;
  console.log(userLoveSongs.value);
})();
</script>
