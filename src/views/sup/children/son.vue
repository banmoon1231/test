<template>
  <div>son:{{ message }}</div>
</template>
<script>
// 什么是异步依赖
// async setup()
const delay = (time = 3000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据加载完成！");
    }, time);
  });
};
import { ref } from "vue";
export default {
  async setup() {
    const message = ref("");
    message.value = await delay(5000);
    return { message };
  },
};
</script>
