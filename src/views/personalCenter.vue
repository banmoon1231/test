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
              >IP:{{ userLoginIp }} </span
            ><span
              class="dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
            >
              <span
                class="icon-[ph--gender-male] text-blue-500"
                v-show="userSex == 1"
              ></span>
              <span
                class="icon-[ph--gender-female] text-red-500"
                v-show="userSex == 2"
              ></span>
              00后 摩羯座</span
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
      <div
        class="dark:bg-[#2C2C2C] w-[92vw] h-[50vw] bg-[#fff] rounded-[15px] mb-[10vw]"
      >
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
            性别：<span class="dark:text-[#E3E3E3]" v-show="userSex == 1"
              >男</span
            >
            <span class="dark:text-[#E3E3E3]" v-show="userSex == 2">女</span>
            <span class="dark:text-[#E3E3E3]" v-show="userSex == 3">保密</span>
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
    <div
      class="bg-[#fff] fixed z-[3] bottom-0 flex items-center justify-around w-[100%]"
    >
      <router-link to="/sup">
        <div>
          <div class="mt-[2vw]">
            <svg
              t="1715070594304"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3610"
              width="20"
              height="20"
            >
              <path d="M338.048 349.248" fill="#ccc" p-id="3611"></path>
              <path
                d="M521.6256 53.4528c-260.5056 0-471.6544 211.1488-471.6544 471.6544s211.1488 471.6544 471.6544 471.6544 471.6544-211.1488 471.6544-471.6544S782.1312 53.4528 521.6256 53.4528zM741.92213333 670.85653333c-19.2512 55.02293333-72.63573333 107.24693333-135.85066666 131.4816-33.51893333 13.17546667-101.23946667 17.6128-138.0352 8.8064C302.42133333 772.57386667 217.77066667 563.06346667 306.31253333 411.78453333c29.14986667-50.03946667 108.3392-117.69173333 137.48906667-117.69173333 6.62186667 0 16.52053333 4.98346667 21.43573333 10.4448 17.6128 19.2512 8.8064 33.5872-38.5024 67.10613333-67.10613333 47.85493333-96.256 101.7856-96.256 177.69813334 0 61.57653333 23.07413333 114.41493333 69.29066667 156.74026666 37.95626667 34.67946667 68.1984 46.76266667 121.0368 47.3088 73.728 0 126.49813333-31.3344 157.2864-93.52533333 16.52053333-33.51893333 17.06666667-37.95626667 14.88213333-84.71893333-2.18453333-42.32533333-4.36906667-52.77013333-18.70506666-75.3664-15.42826667-24.7808-62.6688-58.84586667-70.92906667-51.13173334-1.6384 2.18453333 1.6384 23.07413333 8.26026667 46.76266667 6.07573333 23.68853333 10.99093333 47.85493333 10.99093333 53.93066667 0 44.57813333-34.67946667 90.7264-76.45866667 102.33173333-70.92906667 19.2512-128.68266667-35.2256-128.68266666-121.58293333 0-59.93813333 29.696-105.0624 84.71893333-129.77493334l19.79733333-8.8064-2.18453333-47.3088c-2.73066667-42.87146667-1.6384-48.9472 9.35253333-63.2832 26.96533333-33.51893333 70.92906667-45.6704 108.3392-29.696 22.528 9.35253333 45.6704 32.42666667 45.6704 45.12426667 0 12.62933333-14.88213333 30.78826667-25.32693333 30.78826667-3.82293333 0-17.06666667-4.9152-29.14986667-11.53706667-26.96533333-13.7216-39.04853333-12.0832-49.49333333 6.62186667-6.62186667 12.0832-7.168 18.70506667-1.6384 36.864 6.07573333 20.34346667 8.8064 22.528 32.9728 28.60373333 62.12266667 14.88213333 103.97013333 52.224 128.68266667 114.96106667C755.0976 543.26613333 756.80426667 629.62346667 741.92213333 670.85653333z"
                fill="#ccc"
                p-id="3612"
              ></path>
              <path
                d="M503.168 472.128c-16.512 10.304-33.024 42.304-33.024 65.472 0 19.584 13.44 46.912 25.792 53.632 22.656 12.352 56.704-8.768 56.704-35.072 0-7.744-4.096-32-8.768-54.144C533.568 458.176 529.984 455.616 503.168 472.128z"
                fill="#ccc"
                p-id="3613"
              ></path>
            </svg>
          </div>
          <div class="text-[#9297a1] text-[12px] ml-[-0.7vw]">首页</div>
        </div>
      </router-link>
      <router-link to="/Mv">
        <div>
          <div class="mt-[2vw]">
            <svg
              t="1715070956145"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9013"
              width="20"
              height="20"
            >
              <path
                d="M924 467.1H768.2c-10.8 0-19.5 8.7-19.5 19.5s8.7 19.5 19.5 19.5h136.3v331.1H690.3V175c0-21.5-17.4-38.9-38.9-38.9H378.7c-21.5 0-38.9 17.4-38.9 38.9v662.1H125.6V408.7h136.3c10.8 0 19.5-8.7 19.5-19.5s-8.7-19.5-19.5-19.5H106.1c-10.8 0-19.5 8.7-19.5 19.5v467.4c0 10.8 8.7 19.5 19.5 19.5H924c10.8 0 19.5-8.7 19.5-19.5v-370c0-10.8-8.8-19.5-19.5-19.5z m-272.6 370H378.7V213.9c0-21.5 17.4-38.9 38.9-38.9h194.7c21.5 0 38.9 17.4 38.9 38.9v623.2zM456.6 311.3v19.5H515v97.4h39V252.9h-39l-58.4 58.4z"
                p-id="9014"
              ></path>
            </svg>
          </div>
          <div class="text-[#9297a1] text-[12px] ml-[-1.8vw]">排行榜</div>
        </div>
      </router-link>
      <div>
        <div class="mt-[2vw]">
          <svg
            t="1715071357774"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10081"
            width="20"
            height="20"
          >
            <path
              d="M938.666667 308.736V768h-1.322667A170.666667 170.666667 0 1 1 853.333333 641.493333V356.224l-448 84.48V789.333333h-1.322666A170.666667 170.666667 0 1 1 320 662.826667V150.528l618.666667-116.650667v274.858667zM234.666667 896a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z m533.333333-21.333333a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667zM405.333333 221.269333v132.608l448-84.48V136.789333l-448 84.48z"
              fill="#000000"
              p-id="10082"
            ></path>
          </svg>
        </div>
        <div class="text-[#9297a1] text-[12px] ml-[-0.7vw]">我的</div>
      </div>
      <div>
        <div class="mt-[2vw]">
          <svg
            t="1715071394724"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11057"
            width="20"
            height="20"
          >
            <path
              d="M512 85.333333c129.6 0 234.666667 105.066667 234.666667 234.666667 0 84.256-44.394667 158.133333-111.072 199.52a425.28 425.28 0 0 1 152.853333 83.466667 32 32 0 1 1-41.493333 48.736A361.045333 361.045333 0 0 0 512 565.333333c-188.672 0-345.429333 144.672-361.344 331.413334a32 32 0 0 1-63.765333-5.429334c15.114667-177.322667 138.048-322.346667 301.546666-371.786666C321.76 478.165333 277.333333 404.266667 277.333333 320c0-129.6 105.066667-234.666667 234.666667-234.666667z m415.946667 627.381334l1.066666 1.013333a29.824 29.824 0 0 1 0 43.413333l-162.261333 152.96a31.925333 31.925333 0 0 1-22.762667 8.704 31.925333 31.925333 0 0 1-22.773333-8.704l-93.184-87.84a29.824 29.824 0 0 1 0-43.413333l1.077333-1.013333a32 32 0 0 1 43.904 0l70.976 66.901333 140.053334-132.021333a32 32 0 0 1 43.904 0zM512 149.333333c-94.261333 0-170.666667 76.405333-170.666667 170.666667s76.405333 170.666667 170.666667 170.666667 170.666667-76.405333 170.666667-170.666667-76.405333-170.666667-170.666667-170.666667z"
              fill="#000000"
              p-id="11058"
            ></path>
          </svg>
        </div>
        <div class="text-[#9297a1] text-[12px] ml-[-0.7vw]">关注</div>
      </div>
      <div>
        <div class="mt-[2vw]">
          <svg
            t="1715071614440"
            class="icon"
            viewBox="0 0 1352 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="30340"
            width="20"
            height="20"
          >
            <path
              d="M1140.836063 448.728305c-8.458071-2.621388-17.407652 1.98652-20.090478 10.403632-2.662347 8.417112 1.98652 17.407652 10.403632 20.090478 125.048379 39.832803 180.834783 99.264575 180.834783 192.774385 0 83.167617-75.876882 147.698806-121.054859 178.807304-4.362153 3.0105-6.942581 7.905122-6.942581 13.188856l0 122.324594c-23.367213-8.703826-64.101118-28.48711-100.02232-68.954781-3.747765-4.198316-9.441091-6.102918-14.970581-5.078938-9.113418 1.761245-18.431631 4.259755-27.872723 6.778744-16.322234 4.382632-33.156457 8.929101-49.110058 8.929101-82.184596 0-139.711766-17.653407-198.529149-60.885822-7.167857-5.242775-17.120938-3.686326-22.363713 3.420092-5.242775 7.126897-3.706806 17.120938 3.399612 22.363713 64.858863 47.676486 127.874563 67.111618 217.49325 67.111618 20.192876 0 39.136497-5.078938 57.445251-10.01452 5.693326-1.576928 11.366173-3.112898 16.957101-4.423592 59.800404 63.159057 127.444491 77.535729 130.393552 78.109158 1.064939 0.225275 2.109398 0.327673 3.194816 0.327673 3.645367 0 7.270255-1.249255 10.116918-3.624888 3.747765-3.030979 5.877642-7.577448 5.877642-12.390152l0-135.636327c82.614668-58.919782 127.99744-129.820124 127.99744-200.351833 0-108.193676-64.551669-179.134977-203.137057-223.268495zM1055.98912 431.99648c0-246.267075-224.579188-431.99648-522.331953-431.99648-299.268255 0-533.657167 189.784364-533.657167 432.057919 0 145.241255 102.746105 249.298054 191.99616 312.272795l0 212.352873c0 5.447571 2.744265 10.465071 7.290734 13.434611 2.662347 1.699806 5.672847 2.559949 8.703826 2.559949 2.211796 0 4.444071-0.471031 6.553469-1.413092 4.669347-2.088918 113.887002-51.710966 207.314894-153.883642 40.48815 7.51601 86.260035 14.745305 127.813124 14.745305 302.811224 0 506.296434-160.826223 506.296434-400.150717zM549.651727 800.137597c-41.921722 0-89.557249-8.027999-130.659787-15.871683-5.529489-0.98302-11.222816 0.901102-14.970581 5.078938-65.596128 73.99276-142.681306 120.99342-180.036079 141.247735l0-194.617548c0-5.283734-2.600908-10.178356-6.942581-13.188856-84.416872-58.080118-185.053579-155.603928-185.053579-290.748745 0-224.353913 220.339913-400.048319 501.647567-400.048319 279.546409 0 490.322354 171.967121 490.322354 399.98688 0 220.217036-190.624028 368.161597-474.327793 368.161597zM527.98432 367.99776c-35.286334 0-63.99872 28.712386-63.99872 63.99872s28.712386 63.99872 63.99872 63.99872 63.99872-28.712386 63.99872-63.99872-28.712386-63.99872-63.99872-63.99872zM527.98432 463.9856c-17.632927 0-32.0096-14.335713-32.0096-32.0096s14.376672-32.0096 32.0096-32.0096 32.0096 14.335713 32.0096 32.0096-14.376672 32.0096-32.0096 32.0096zM751.99008 367.99776c-35.286334 0-63.99872 28.712386-63.99872 63.99872s28.712386 63.99872 63.99872 63.99872 63.99872-28.712386 63.99872-63.99872-28.712386-63.99872-63.99872-63.99872zM751.99008 463.9856c-17.632927 0-32.0096-14.335713-32.0096-32.0096s14.376672-32.0096 32.0096-32.0096 32.0096 14.335713 32.0096 32.0096-14.376672 32.0096-32.0096 32.0096zM303.99904 371.028739c-35.286334 0-63.99872 28.712386-63.99872 63.99872s28.712386 63.99872 63.99872 63.99872 63.99872-28.712386 63.99872-63.99872-28.712386-63.99872-63.99872-63.99872zM303.99904 467.037059c-17.632927 0-32.0096-14.335713-32.0096-32.0096s14.376672-32.0096 32.0096-32.0096 32.0096 14.335713 32.0096 32.0096-14.376672 32.0096-32.0096 32.0096z"
              fill="#444444"
              p-id="30341"
            ></path>
          </svg>
        </div>
        <div class="text-[#9297a1] text-[12px] ml-[-0.7vw]">社区</div>
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
import moment from "moment";
const cookies = localStorage.getItem("userCookie");
// const changeTime = moment;

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
// 用户登录IP
const userLoginIp = ref();
// 用户性别
const userSex = ref();

// 获取时间戳
const getTime = ref();

// 网易云音乐创建时间
const getCreateTime = ref();
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
  userLoginIp.value = userInfo.data.profile.lastLoginIP;
  userSex.value = userInfo.data.profile.gender;
  getTime.value = userInfo.data.profile.createTime;
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

// 将时间戳转换为对应的时间
const formatDate = (ts) => {
  getCreateTime.value = moment(ts * 1000).format("YYYY-MM-DD");
  console.log(getCreateTime.value);
};

// 转换时间戳
formatDate(getTime.value);
</script>
