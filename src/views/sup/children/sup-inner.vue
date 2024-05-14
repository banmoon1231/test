<template>
  <div
    :class="
      checked
        ? 'text-[#f0f0f0] text-[3.5vw] bg-[#151515]'
        : 'text-[#383838] text-[3.5vw] bg-[#f4f4f1]'
    "
  >
    <div
      :class="
        checked
          ? 'dark:from-[#2c1a2b] dark:to-[#1a1c23]  bg-gradient-to-b opacity-0.2'
          : 'from-[#E6E6FB] to-[#f1f1f1] bg-gradient-to-b opacity-0.2'
      "
    >
      <div
        class="w-[100vw] h-[20vw] p-[3vw] pl-[5.2vw] flex justify-between items-center"
      >
        <div @click="showDrawer">
          <span
            class="icon-[octicon--three-bars-16] text-[20px] font-semibold"
          ></span>
        </div>
        <a-drawer
          :width="330"
          placement="left"
          :open="open"
          @close="onClose"
          :style="
            checked
              ? 'background: #151515; height: 100vh'
              : 'background: #f1f1f1; height: 100vh'
          "
        >
          <template #extra>
            <div
              :class="
                checked
                  ? 'bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] absolute w-[330px] left-0 top-0'
                  : 'flex justify-between items-center h-[16vw] px-[5vw] bg-[#f1f1f1] absolute w-[330px] left-0 top-0'
              "
            >
              <div class="flex items-center justify-between">
                <div
                  class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="text-[#f9dada] w-[7vw] h-[7vw] iconify iconify--gridicons"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2"
                    ></path>
                  </svg>
                </div>
                <router-link to="/login">
                  <span
                    :class="
                      checked
                        ? 'text-[#f0f0f0] text-[3.5vw]'
                        : 'text-[#383838] text-[3.5vw]'
                    "
                    >立刻登录</span
                  >
                </router-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  :class="
                    checked
                      ? 'text-[#f0f0f0] text-[4vw] iconify iconify--mingcute'
                      : 'text-[#383838] text-[4vw] iconify iconify--mingcute'
                  "
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                    ></path>
                  </g>
                </svg>
                <div></div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                  class="dark:text-[#f0f0f0] text-[#383838] text-[5vw] iconify iconify--teenyicons"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M.5 5V2.5a2 2 0 0 1 2-2H5m5 0h2.5a2 2 0 0 1 2 2V5m-14 5v2.5a2 2 0 0 0 2 2H5m9.5-4.5v2.5a2 2 0 0 1-2 2H10m-8-7h11"
                  ></path>
                </svg>
              </div>
            </div>
          </template>
          <div class="h-[80vh]">
            <div
              class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
              style="pointer-events: auto"
            >
              <div class="h-[10vw] flex justify-between items-center">
                <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
                <div
                  class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
                >
                  会员中心
                </div>
              </div>
              <div class="h-[7vw] border-b-[1px] border-[#494443]">
                <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
              </div>
              <div
                class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
              >
                <div class="text-[2.5vw] h-[11vw]">
                  受邀专享，黑胶VIP低至0.27元/天!
                </div>
                <div class="scale-50 w-[8vw]">
                  <div
                    class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
                  >
                    受邀专享
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'bg-[#3b3b3b] text-[#f0f0f0] rounded-[15px]  w-[76vw] mx-auto mt-[4vw]'
                  : ' rounded-[15px] bg-[#fff] text-[#333] w-[76vw] mx-auto mt-[4vw]'
              "
              style="pointer-events: auto"
            >
              <!---->
              <div class="px-[4vw]">
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <path
                          d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295c1.086 0 2.005-.765 3.841-2.296L18 8"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">我的消息</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--cib"
                    >
                      <path
                        fill="currentColor"
                        d="M16 1.151c-8.88 0-16 7.182-16 16.156c0 1.328.052 1.833.328 3.104l4.88 3.615l.76 6.021h8.135l.438.302c.5.349.938.5 1.443.5c.469 0 .974-.135 1.365-.417l.521-.385h8.125l.75-6.021l4.927-3.615c.276-1.271.328-1.776.328-3.104c0-8.969-7.12-16.156-16-16.156m1.328 3.01c1.198 0 2.37.297 3.349.865l-3.286 16.729l4.563-16.078c1.411.479 2.479 1.25 3.344 2.417l.031.047l-6.536 14.151L26.22 9.344l.047.036c1.01.943 1.661 2.089 1.99 3.531l-8.26 10.224l8.583-8.667l.01.026c.339.75.557 1.813.557 2.661c0 .677-.031.948-.219 1.667l-4.74 3.469l-.62 4.948h-5.969l-.688.526c-.266.208-.646.354-.911.354s-.646-.146-.911-.354l-.688-.526H8.427l-.589-4.813l-4.839-3.557a6.634 6.634 0 0 1-.214-1.677c0-.964.214-1.99.568-2.74l.016-.031l8.604 8.734l-8.307-10.328c.333-1.417 1.167-2.786 2.188-3.62l7.391 13.036L6.641 8.134c.74-1.089 1.932-1.943 3.391-2.438L14.6 21.79L11.142 5.087l.073-.042c1.083-.599 2.13-.875 3.276-.875c.26 0 .38.005.703.042l.781 17.401l.615-17.417c.297-.031.411-.036.74-.036z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">云贝中心</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m-4.95-2.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m11.314 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414M12.617 2a2 2 0 0 1 1.985 1.752l.38 3.04a6 6 0 1 1-5.964 0l.38-3.04A2 2 0 0 1 11.383 2zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-1.929-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 0 1 6.343 4.93M12.617 4h-1.234l-.25 2h1.734z"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">创作者中心</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'bg-[#3b3b3b] text-[#f0f0f0] rounded-[15px]  w-[76vw] mx-auto mt-[4vw]'
                  : ' rounded-[15px] bg-[#fff] text-[#333] w-[76vw] mx-auto mt-[4vw]'
              "
              style="pointer-events: auto"
            >
              <div
                class="text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
              >
                音乐服务
              </div>
              <div class="px-[4vw]">
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                    >
                      <path
                        fill="currentColor"
                        d="m198.91 128l30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53l-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91L170.34 78Zm-28.57 50l-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09L149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09L85.64 178ZM128 227.91L106.32 190h43.35ZM170.34 178L192 140.09L213.66 178Z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">趣测</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[3vw]">点击查看今日运势</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
                      ></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">云村有票</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                    >
                      <path
                        fill="currentColor"
                        d="M11 18h2v-2h-2zm1-12c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5c0-2.2-1.8-4-4-4m7-1v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">多多西西口袋</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                    >
                      <path
                        fill="currentColor"
                        d="M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99c-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5c35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">商城</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 14 14"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--streamline"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          width="13"
                          height="13"
                          x=".5"
                          y=".5"
                          rx="3"
                        ></rect>
                        <path d="M2.5 7.02h2L6 4.51l1.5 5.5l2-2.99h2"></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">Beat专区</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[3vw]">顶尖制作邀你创作</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--tabler"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1-1.414 7.072l-2.122 2.12a4 4 0 0 0-.707 3.536L3.808 8.88a4 4 0 0 0 3.535-.707L9.464 6.05a7 7 0 0 1 7.072-1.414a2 2 0 0 1 2.828 0"
                        ></path>
                        <path
                          d="m7.343 12.414l-.707.707a3 3 0 0 0 4.243 4.243l.707-.707"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">口袋彩铃</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                    >
                      <g fill="none">
                        <rect
                          width="40"
                          height="28"
                          x="4"
                          y="13"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="4"
                          rx="14"
                        ></rect>
                        <circle
                          cx="31"
                          cy="22"
                          r="2"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="35"
                          cy="27"
                          r="2"
                          fill="currentColor"
                        ></circle>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">游戏专区</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[3vw]">音乐浇灌治愈花园</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'bg-[#3b3b3b] text-[#f0f0f0] rounded-[15px]  w-[76vw] mx-auto mt-[4vw]'
                  : ' rounded-[15px] bg-[#fff] text-[#333] w-[76vw] mx-auto mt-[4vw]'
              "
            >
              <div
                class="text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
              >
                其他
              </div>
              <div class="px-[4vw]">
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                    >
                      <path
                        fill="currentColor"
                        d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">设置</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--line-md"
                    >
                      <g fill="currentColor" fill-opacity="0">
                        <path
                          d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
                        >
                          <animate
                            id="iconifyVue3"
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.7s;iconifyVue3.begin+6s"
                            dur="0.4s"
                            values="0;1"
                          ></animate>
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+2.2s"
                            dur="0.4s"
                            values="1;0"
                          ></animate>
                        </path>
                        <path
                          d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+3s"
                            dur="0.4s"
                            values="0;1"
                          ></animate>
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+5.2s"
                            dur="0.4s"
                            values="1;0"
                          ></animate>
                        </path>
                        <path
                          d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+0.4s"
                            dur="0.4s"
                            values="0;1"
                          ></animate>
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+2.8s"
                            dur="0.4s"
                            values="1;0"
                          ></animate>
                        </path>
                        <path
                          d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+3.4s"
                            dur="0.4s"
                            values="0;1"
                          ></animate>
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="iconifyVue3.begin+5.6s"
                            dur="0.4s"
                            values="1;0"
                          ></animate>
                        </path>
                      </g>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-dasharray="56"
                        stroke-dashoffset="56"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="56;0"
                        ></animate>
                      </path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">深色模式</span>
                  </div>
                  <div>
                    <a-switch v-model:checked="checked" @click="isDark" />
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                    >
                      <path
                        fill="currentColor"
                        d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">定时关闭</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                    >
                      <path
                        fill="currentColor"
                        d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">个性装扮</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">边听边存</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">在线听歌免流量</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <path
                          d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          d="M10 16H6m8 0h-1.5M2 10h20"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">音乐黑名单</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design"
                    >
                      <path
                        fill="currentColor"
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">青少年模式</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                    >
                      <path
                        fill="currentColor"
                        d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">音乐闹钟</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'bg-[#3b3b3b] text-[#f0f0f0] rounded-[15px]  w-[76vw] mx-auto mt-[4vw]'
                  : ' rounded-[15px] bg-[#fff] text-[#333] w-[76vw] mx-auto mt-[4vw]'
              "
              style="pointer-events: auto"
            >
              <!---->
              <div class="px-[4vw]">
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path
                          d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4"
                        ></path>
                        <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">我的订单</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
                      ></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">优惠券</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                    >
                      <path
                        fill="currentColor"
                        d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.06 192.06 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193 193 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4a352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">我的客服</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                    >
                      <path
                        fill="currentColor"
                        d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">分享网易云音乐</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                    >
                      <path
                        fill="currentColor"
                        d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]"
                      >个人信息收集与使用清单</span
                    >
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path
                          d="M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          d="M20 40h8M20 8h8M8 20v8m32-8v8"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]"
                      >个人信息第三方共享清单</span
                    >
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--icons8"
                    >
                      <path
                        fill="currentColor"
                        d="M16 4c-2.144 0-3.884 1.72-3.97 3.844A9.933 9.933 0 0 0 6 17c0 .17-.008.36 0 .563c-1.185.696-2 1.972-2 3.437c0 2.197 1.803 4 4 4c.575 0 1.13-.122 1.625-.344C11.358 26.112 13.618 27 16 27s4.642-.888 6.375-2.344A3.98 3.98 0 0 0 24 25c2.197 0 4-1.803 4-4c0-1.48-.825-2.777-2.03-3.47c.015-.16.03-.32.03-.53a9.931 9.931 0 0 0-6.03-9.156C19.883 5.72 18.143 4 16 4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m-3.53 3.844C13.14 11.118 14.47 12 16 12c1.53 0 2.86-.882 3.53-2.156A7.937 7.937 0 0 1 24 17c-2.197 0-4 1.803-4 4c0 .895.31 1.706.813 2.375A8.08 8.08 0 0 1 16 25a8.077 8.077 0 0 1-4.813-1.625A3.93 3.93 0 0 0 12 21c0-2.197-1.803-4-4-4c0-3.12 1.79-5.856 4.47-7.156M8 19c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m16 0c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2"
                      ></path>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]"
                      >个人信息与隐私保护</span
                    >
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
                <div
                  class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      class="font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                    >
                      <g fill="none">
                        <path
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                        ></path>
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M24 12v16"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-[3.5vw] ml-[2.73vw]">关于</span>
                  </div>
                  <div class="flex items-center">
                    <!---->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                      style="color: rgb(181, 181, 181)"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                        ></path>
                      </g>
                    </svg>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'bg-[#2c2c2c] h-[12vw] px-[3.6vw] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]'
                  : 'h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]'
              "
              style="pointer-events: auto"
            >
              关闭云音乐
            </div>
          </div>
        </a-drawer>

        <div class="flex relative">
          <input
            type="text"
            class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
            placeholder="Love Is Gone (Acoustic)"
          />
          <span
            class="icon-[material-symbols--search] text-[20px] absolute left-[2.5vw] top-[2.5vw] text-[#8189A1]"
          ></span>
          <span
            class="icon-[lucide--scan-line] absolute right-[2.5vw] top-[2.5vw] text-[#8189A1]"
          ></span>
        </div>
        <div class="mt-[2vw]">
          <span class="icon-[mdi--microphone] text-[25px]"></span>
        </div>
      </div>
      <div
        class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto"
      >
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="item in homepageData?.[0]?.extInfo?.banners"
            :key="item.bannerId"
          >
            <van-image
              width="100vw"
              height="140px"
              fit="cover"
              :src="item.pic"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 滑动图标 -->
    <div
      :class="
        checked
          ? 'dark:bg-[#1a1c23] text-[#bcbec5]'
          : 'bg-[#f1f1f1] text-[#666F7D]'
      "
    >
      <BetterScroll :option="{ scrollX: true, click: true }">
        <div
          class="flex w-[190vw] mx-auto overflow-hidden h-[25vw] scroll-content relative"
        >
          <div
            v-for="(item, index) in homepageDragonball"
            :key="item.id"
            class="w-[19vw]"
          >
            <img :src="item.iconUrl" alt="" class="imgred" />
            <p class="text-center text-[2.78vw] w-[100%] mt-[-2vw]">
              {{ item.name }}
            </p>
          </div>
          <div class="absolute text-[20px] left-[6.8vw] top-[8vw] text-white">
            {{ currentDate < 10 ? `0${currentDate}` : currentDate }}
          </div>
        </div>
      </BetterScroll>
      <!-- 推荐歌单 -->
      <div
        :class="
          checked
            ? 'w-[100vw] px-[4vw] dark:text-[#e9ebf2]'
            : 'w-[100vw] px-[4vw]'
        "
      >
        <div class="flex justify-between items-center h-[12vw]">
          <div class="flex items-center">
            <span class="text-[4vw] font-[800]">推荐歌单</span>
            <span class="icon-[mingcute--right-line]"></span>
          </div>
          <div>
            <span class="icon-[mingcute--more-2-line]"></span>
          </div>
        </div>
        <BetterScroll :option="{ scrollX: true, click: true }">
          <div class="w-[210vw] flex pl-[2vw]">
            <div
              class="w-[31vw] ml-[3vw]"
              v-for="item in recSong"
              :key="item.id"
            >
              <router-link :to="`/recommdSongs?id=${item.id}`">
                <img
                  :src="item.picUrl"
                  alt=""
                  class="w-[31vw] h-[31vw] rounded-lg"
                />
              </router-link>
              <p class="text-[2.78vw] scroll-item">
                {{ item.name }}
              </p>
            </div>
          </div>
        </BetterScroll>
      </div>
      <!-- 新歌新碟\数字专辑 -->
      <div
        :class="
          checked
            ? 'w-[100vw] px-[4vw] text-[#e9ebf2]'
            : 'w-[100vw] px-[4vw] text-[#374d5b]'
        "
      >
        <div class="flex justify-between items-center h-[12vw]">
          <div class="flex items-center">
            <span class="text-[4vw] font-[800]">新歌新碟\数字专辑</span>
            <span class="icon-[mingcute--right-line]"></span>
          </div>
          <div>
            <span class="icon-[mingcute--more-2-line]"></span>
          </div>
        </div>
        <BetterScroll :option="{ scrollX: true, click: true }">
          <div class="w-[210vw] flex pl-[2vw]">
            <div class="w-[210vw] flex pl-[2vw]">
              <div>
                <ul>
                  <li
                    v-for="item in firstThreeItems"
                    :key="item.id"
                    class="flex items-center pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
                  >
                    <div>
                      <img
                        :src="item.blurPicUrl"
                        alt=""
                        class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                      />
                    </div>
                    <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                      <p class="text-[3.5vw]">
                        {{ item.name }}
                      </p>
                      <p
                        :class="
                          checked
                            ? 'text-[#a8aaaf] text-[2.36vw] '
                            : 'text-[#79838F] text-[2.36vw]'
                        "
                      >
                        {{ item.company }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li
                    v-for="item in midThreeItems"
                    :key="item.id"
                    class="flex items-center pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
                  >
                    <div>
                      <img
                        :src="item.blurPicUrl"
                        alt=""
                        class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                      />
                    </div>
                    <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                      <p class="text-[3.5vw]">
                        {{ item.name }}
                      </p>
                      <p class="text-[2.36vw]">
                        {{ item.company }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li
                    v-for="item in mid2ThreeItems"
                    :key="item.id"
                    class="flex items-center pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
                  >
                    <div>
                      <img
                        :src="item.blurPicUrl"
                        alt=""
                        class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                      />
                    </div>
                    <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                      <p class="text-[3.5vw]">
                        {{ item.name }}
                      </p>
                      <p class="text-[2.36vw]">
                        {{ item.company }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li
                    v-for="item in lastThreeItems"
                    :key="item.id"
                    class="flex items-center pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
                  >
                    <div>
                      <img
                        :src="item.blurPicUrl"
                        alt=""
                        class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                      />
                    </div>
                    <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                      <p class="text-[3.5vw]">
                        {{ item.name }}
                      </p>
                      <p class="text-[2.36vw]">
                        {{ item.company }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BetterScroll>
      </div>
      <!-- 排行榜 -->
      <div
        :class="
          checked
            ? 'w-[100vw] px-[4vw] text-[#e9ebf2]'
            : 'w-[100vw] px-[4vw] text-[#374d5b]'
        "
      >
        <div class="flex justify-between items-center h-[12vw]">
          <div class="flex items-center">
            <span class="text-[4vw] font-[800]">排行榜</span>
            <span class="icon-[mingcute--right-line]"></span>
          </div>
          <div>
            <span class="icon-[mingcute--more-2-line]"></span>
          </div>
        </div>
        <BetterScroll :option="{ scrollX: true, click: true }">
          <div
            :class="
              checked
                ? 'scroll-content flex w-[560vw] justify-between bg-[#1a1c23] text-[#e6e6e9]'
                : 'scroll-content flex w-[560vw] justify-between bg-white text-[#374d5b]'
            "
          >
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts1 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts7 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo1"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between text-[3.5vw] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p class="text-[2.36vw]">
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts2 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts8 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo2"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p
                        class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts3 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts9 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo3"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p
                        class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts4 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts10 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo4"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p
                        class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts5 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts11 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo5"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p
                        class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="
                checked
                  ? 'w-[88vw] h-[80vw] rounded-md shadow-[0px_10px_10px_5px_#fff]'
                  : 'w-[88vw] h-[80vw] rounded-md '
              "
            >
              <div
                class="flex items-center justify-between p-[4vw] dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
              >
                <div>
                  <span>{{ AllTheCharts6 }} </span>
                  <span class="icon-[mingcute--right-line]"></span>
                </div>
                <div>{{ AllTheCharts12 }}</div>
              </div>
              <div
                class="flex items-center pl-[3vw] pt-[3.7] box-border"
                v-for="(item, index) in theChartsInfo6"
                :key="item.id"
              >
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                />
                <div
                  class="justify-between dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw] flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                    >
                      {{ index + 1 }}
                    </div>
                    <div>
                      <p>{{ item.uiElement.mainTitle.title }}</p>
                      <p
                        class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                      >
                        {{ item.resourceExtInfo?.artists[0].name }}
                      </p>
                    </div>
                  </div>

                  <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                    <p class="text-[#FF3836]">
                      {{ item.uiElement.labelText.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BetterScroll>
      </div>
      <!-- 热门话题 -->
      <!-- <div>
        <div class="flex justify-between items-center h-[12vw]">
          <div class="flex items-center">
            <span
              class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"
              >热门话题</span
            >
            <span class="icon-[mingcute--right-line]"></span>
          </div>
          <div>
            <span class="icon-[mingcute--more-2-line]"></span>
          </div>
        </div>
      </div> -->
      <!-- 音乐日历 -->
      <div
        :class="
          checked
            ? 'w-[100vw] px-[4vw] text-[#e9ebf2]'
            : 'w-[100vw] px-[4vw] text-[#374d5b]'
        "
      >
        <div class="flex justify-between items-center h-[12vw]">
          <div class="flex items-center">
            <span class="text-[4vw] font-[800]">音乐日历</span>
            <span class="icon-[mingcute--right-line]"></span>
          </div>
          <div>
            <span class="icon-[mingcute--more-2-line]"></span>
          </div>
        </div>
        <div>
          <BetterScroll :option="{ scrollX: true, click: true }">
            <div class="w-[380vw] mb-[30vw] flex items-center justify-between">
              <div
                :class="
                  checked
                    ? 'bg-[#25272e] text-[#a5a7ae] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw]'
                    : 'text-[#3E4558] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw] bg-white'
                "
              >
                <div
                  class="flex items-center pt-[3vw] pb-[10vw]"
                  v-for="item in firstThree"
                  :key="item.id"
                >
                  <p class="text-[3.68vw] flex-1">
                    {{ item.title }}
                  </p>
                  <div class="flex-4 mt-[3vw]">
                    <img
                      :src="item.imgUrl"
                      alt=""
                      class="w-[15vw] h-[15vw] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="
                  checked
                    ? 'bg-[#25272e] text-[#a5a7ae] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw]'
                    : 'text-[#3E4558] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw] bg-white'
                "
              >
                <div
                  class="flex items-center pt-[3vw] pb-[10vw]"
                  v-for="item in midThree"
                  :key="item.id"
                >
                  <p class="text-[3.68vw] flex-1">
                    {{ item.title }}
                  </p>
                  <div class="flex-4 mt-[3vw]">
                    <img
                      :src="item.imgUrl"
                      alt=""
                      class="w-[15vw] h-[15vw] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="
                  checked
                    ? 'bg-[#25272e] text-[#a5a7ae] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw]'
                    : 'text-[#3E4558] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw] bg-white'
                "
              >
                <div
                  class="flex items-center pt-[3vw] pb-[10vw]"
                  v-for="item in mid2Three"
                  :key="item.id"
                >
                  <p class="text-[3.68vw] flex-1">
                    {{ item.title }}
                  </p>
                  <div class="flex-4 mt-[3vw]">
                    <img
                      :src="item.imgUrl"
                      alt=""
                      class="w-[15vw] h-[15vw] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div
                :class="
                  checked
                    ? 'bg-[#25272e] text-[#a5a7ae] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw]'
                    : 'text-[#3E4558] w-[91vw] scroll-item shadows mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[10.8vw] bg-white'
                "
              >
                <div
                  class="flex items-center pt-[3vw] pb-[10vw]"
                  v-for="item in lastThree"
                  :key="item.id"
                >
                  <p class="text-[3.68vw] flex-1">
                    {{ item.title }}
                  </p>
                  <div class="flex-4 mt-[3vw]">
                    <img
                      :src="item.imgUrl"
                      alt=""
                      class="w-[15vw] h-[15vw] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BetterScroll>
        </div>
      </div>
    </div>
    <div
      class="bg-[#fff] fixed z-[3] bottom-0 flex items-center justify-around w-[100%]"
    >
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
            <path d="M338.048 349.248" fill="#C20C0C" p-id="3611"></path>
            <path
              d="M521.6256 53.4528c-260.5056 0-471.6544 211.1488-471.6544 471.6544s211.1488 471.6544 471.6544 471.6544 471.6544-211.1488 471.6544-471.6544S782.1312 53.4528 521.6256 53.4528zM741.92213333 670.85653333c-19.2512 55.02293333-72.63573333 107.24693333-135.85066666 131.4816-33.51893333 13.17546667-101.23946667 17.6128-138.0352 8.8064C302.42133333 772.57386667 217.77066667 563.06346667 306.31253333 411.78453333c29.14986667-50.03946667 108.3392-117.69173333 137.48906667-117.69173333 6.62186667 0 16.52053333 4.98346667 21.43573333 10.4448 17.6128 19.2512 8.8064 33.5872-38.5024 67.10613333-67.10613333 47.85493333-96.256 101.7856-96.256 177.69813334 0 61.57653333 23.07413333 114.41493333 69.29066667 156.74026666 37.95626667 34.67946667 68.1984 46.76266667 121.0368 47.3088 73.728 0 126.49813333-31.3344 157.2864-93.52533333 16.52053333-33.51893333 17.06666667-37.95626667 14.88213333-84.71893333-2.18453333-42.32533333-4.36906667-52.77013333-18.70506666-75.3664-15.42826667-24.7808-62.6688-58.84586667-70.92906667-51.13173334-1.6384 2.18453333 1.6384 23.07413333 8.26026667 46.76266667 6.07573333 23.68853333 10.99093333 47.85493333 10.99093333 53.93066667 0 44.57813333-34.67946667 90.7264-76.45866667 102.33173333-70.92906667 19.2512-128.68266667-35.2256-128.68266666-121.58293333 0-59.93813333 29.696-105.0624 84.71893333-129.77493334l19.79733333-8.8064-2.18453333-47.3088c-2.73066667-42.87146667-1.6384-48.9472 9.35253333-63.2832 26.96533333-33.51893333 70.92906667-45.6704 108.3392-29.696 22.528 9.35253333 45.6704 32.42666667 45.6704 45.12426667 0 12.62933333-14.88213333 30.78826667-25.32693333 30.78826667-3.82293333 0-17.06666667-4.9152-29.14986667-11.53706667-26.96533333-13.7216-39.04853333-12.0832-49.49333333 6.62186667-6.62186667 12.0832-7.168 18.70506667-1.6384 36.864 6.07573333 20.34346667 8.8064 22.528 32.9728 28.60373333 62.12266667 14.88213333 103.97013333 52.224 128.68266667 114.96106667C755.0976 543.26613333 756.80426667 629.62346667 741.92213333 670.85653333z"
              fill="#C20C0C"
              p-id="3612"
            ></path>
            <path
              d="M503.168 472.128c-16.512 10.304-33.024 42.304-33.024 65.472 0 19.584 13.44 46.912 25.792 53.632 22.656 12.352 56.704-8.768 56.704-35.072 0-7.744-4.096-32-8.768-54.144C533.568 458.176 529.984 455.616 503.168 472.128z"
              fill="#C20C0C"
              p-id="3613"
            ></path>
          </svg>
        </div>
        <div class="text-red-500 text-[12px] ml-[-0.7vw]">首页</div>
      </div>
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
      <router-link to="/personalCenter">
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
      </router-link>
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
<script>
import { ref, computed } from "vue";
// import Date from "datejs";

import {
  getHomePageData,
  getDragonball,
  recommendSong,
  newSong,
  theCharts,
  theChartsList,
  musicDate,
} from "../../../service";
import BetterScroll from "../../../components/BetterScroll.vue";
export default {
  // 组件注册
  components: { BetterScroll },
  async setup() {
    const homepageData = ref({});
    const homepageDragonball = ref([]);
    const recSong = ref([]);
    const newSongList = ref([]);
    const theChartsInfo1 = ref([]);
    const theChartsInfo2 = ref([]);
    const theChartsInfo3 = ref([]);
    const theChartsInfo4 = ref([]);
    const theChartsInfo5 = ref([]);
    const theChartsInfo6 = ref([]);
    const chartsPic = ref([]);
    const musicDateInfo = ref([]);
    const AllTheCharts1 = ref();
    const AllTheCharts2 = ref();
    const AllTheCharts3 = ref();
    const AllTheCharts4 = ref();
    const AllTheCharts5 = ref();
    const AllTheCharts6 = ref();
    const AllTheCharts7 = ref();
    const AllTheCharts8 = ref();
    const AllTheCharts9 = ref();
    const AllTheCharts10 = ref();
    const AllTheCharts11 = ref();
    const AllTheCharts12 = ref();
    const currentDate = ref(new Date().getDate());

    // 如何集中捕获请求错误？

    const resDataAll = await getHomePageData();
    homepageData.value = resDataAll.data.data.blocks;
    console.log(homepageData.value);
    theChartsInfo1.value =
      resDataAll.data.data.blocks[3].creatives[0].resources;
    theChartsInfo2.value =
      resDataAll.data.data.blocks[3].creatives[1].resources;
    theChartsInfo3.value =
      resDataAll.data.data.blocks[3].creatives[2].resources;
    theChartsInfo4.value =
      resDataAll.data.data.blocks[3].creatives[3].resources;
    theChartsInfo5.value =
      resDataAll.data.data.blocks[3].creatives[4].resources;
    theChartsInfo6.value =
      resDataAll.data.data.blocks[3].creatives[5].resources;
    AllTheCharts1.value =
      resDataAll.data.data.blocks[3].creatives[0].uiElement.mainTitle.title;
    console.log(AllTheCharts1.value);
    AllTheCharts2.value =
      resDataAll.data.data.blocks[3].creatives[1].uiElement.mainTitle.title;
    AllTheCharts3.value =
      resDataAll.data.data.blocks[3].creatives[2].uiElement.mainTitle.title;
    AllTheCharts4.value =
      resDataAll.data.data.blocks[3].creatives[3].uiElement.mainTitle.title;
    AllTheCharts5.value =
      resDataAll.data.data.blocks[3].creatives[4].uiElement.mainTitle.title;
    AllTheCharts6.value =
      resDataAll.data.data.blocks[3].creatives[5].uiElement.mainTitle.title;
    AllTheCharts7.value =
      resDataAll.data.data.blocks[3].creatives[0].uiElement.mainTitle.titleDesc;
    console.log(AllTheCharts1.value);
    AllTheCharts8.value =
      resDataAll.data.data.blocks[3].creatives[1].uiElement.mainTitle.titleDesc;
    AllTheCharts9.value =
      resDataAll.data.data.blocks[3].creatives[2].uiElement.mainTitle.titleDesc;
    AllTheCharts10.value =
      resDataAll.data.data.blocks[3].creatives[3].uiElement.mainTitle.titleDesc;
    AllTheCharts11.value =
      resDataAll.data.data.blocks[3].creatives[4].uiElement.mainTitle.titleDesc;
    AllTheCharts12.value =
      resDataAll.data.data.blocks[3].creatives[5].uiElement.mainTitle.titleDesc;
    homepageDragonball.value = (await getDragonball()).data.data;
    console.log(homepageDragonball.value);
    const res = await recommendSong({ limit: 6 });
    recSong.value = res.data.result;
    console.log(recSong.value);
    const resNewSong = await newSong({ limit: 12, area: "All" });
    newSongList.value = resNewSong.data.albums;
    console.log(resNewSong);
    const resCharts = await theCharts();
    console.log(resCharts);
    //榜单详情
    const resChartsList = await theChartsList({ id: "19723756", limit: 3 });
    console.log(resChartsList);
    chartsPic.value = resChartsList.data.songs;
    const resMusicDate = await musicDate({
      startTime: "1606752000000",
      endTime: "1609430399999",
    });
    musicDateInfo.value = resMusicDate.data.data.calendarEvents;
    console.log(resMusicDate);

    const firstThreeItems = computed(() => newSongList.value.slice(0, 3));
    const midThreeItems = computed(() => newSongList.value.slice(3, 6));
    const mid2ThreeItems = computed(() => newSongList.value.slice(6, 9));
    const lastThreeItems = computed(() => newSongList.value.slice(9, 12));
    // 音乐日历
    const firstThree = computed(() => musicDateInfo.value.slice(0, 2));
    const midThree = computed(() => musicDateInfo.value.slice(2, 4));
    const mid2Three = computed(() => musicDateInfo.value.slice(4, 6));
    const lastThree = computed(() => musicDateInfo.value.slice(6, 8));

    // 侧边抽屉
    const open = ref(false);
    const showDrawer = () => {
      open.value = true;
    };
    const onClose = () => {
      open.value = false;
    };

    // 开关
    const checked = ref(false);
    const isDark = () => {
      console.log(checked.value);

      // 设置日期
    };

    return {
      homepageData,
      homepageDragonball,
      recSong,
      newSongList,
      firstThreeItems,
      midThreeItems,
      mid2ThreeItems,
      lastThreeItems,
      chartsPic,
      musicDateInfo,
      firstThree,
      midThree,
      mid2Three,
      lastThree,
      theChartsInfo1,
      theChartsInfo2,
      theChartsInfo3,
      theChartsInfo4,
      theChartsInfo5,
      theChartsInfo6,
      AllTheCharts1,
      AllTheCharts2,
      AllTheCharts3,
      AllTheCharts4,
      AllTheCharts5,
      AllTheCharts6,
      AllTheCharts7,
      AllTheCharts8,
      AllTheCharts9,
      AllTheCharts10,
      AllTheCharts11,
      AllTheCharts12,
      open,
      showDrawer,
      onClose,
      checked,
      isDark,
      currentDate,
    };
  },
};
</script>
