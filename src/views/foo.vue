<template>
  <div>鼠标位置：x坐标（{{ x }}）y坐标（{{ y }}）</div>
  <div ref="ele" class="w-[300px] h-[400px] bg-orange-400">
    <i @click="toggle"
      >{{ isFullscreen ? "退出" : "进入" }}全屏{{ isFullscreen }}</i
    >
  </div>
  <co-button @click="toggle">进入ele全屏</co-button>
  <co-button @click="run">手动触发请求</co-button>
  <co-button @click="updateA">更新a</co-button>
  <co-button @click="updateB">更新b</co-button>
</template>
<script>
import { ref, watchEffect, watch } from "vue";
import { useFullscreen, useMousePosition, useRequest } from "@/hooks";
import { getHomePageData } from "@/service";
export default {
  setup() {
    const ele = ref();
    const a = ref(1);
    const b = ref(2);
    const updateA = () => a.value++;
    const updateB = () => b.value++;
    const { x, y } = useMousePosition();
    const { isFullscreen, toggle } = useFullscreen(ele);
    // getHomePageData 类型： () => Promise
    // () => getHomePageData() 类型：() => Promise
    const { data, run } = useRequest(
      () => getHomePageData({ a: a.value, b: b.value }),
      {
        deps: [a, b],
        manual: true,
        fomateResult(response) {
          return response.data.data.blocks;
        },
      }
    );
    watchEffect(() => console.log(data.value));
    return { x, y, ele, toggle, isFullscreen, run, updateA, updateB };
  },
};
</script>
