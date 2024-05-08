<template>
  <div>{{ a }}</div>
  <co-button @click="updateA">updateA</co-button>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const a = ref(123);
    const updateA = () => a.value++;
    // 不需要手动指定监听数据源
    // 优点
    // 自动收集监听数据源
    // watchEffect默认执行一次

    // 缺点:无法确定监听数据变化更新前后的值  只能获取到更新后的最新值
    const stopWatch = watchEffect(() => {
      //需要在回调函数中用到要监听的响应式数据
      console.log("a", a.value);
    });
    return { a, updateA, stopWatch };
  },
};
</script>

<style></style>
