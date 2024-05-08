<template>
  <div>count:{{ count }}</div>
  <div>index:{{ index }}</div>
  <co-button @click="updateCount">更新count</co-button>
  <co-button @click="updateIndex">更新count</co-button>
  <co-button @click="stopWatchCount">取消监听count</co-button>
  <co-button @click="updateO">监听o.a.b.c.d</co-button>
</template>
<script>
import { watch, watchEffect, ref } from "vue";
export default {
  setup() {
    // watch和watchEffect区别
    const count = ref(123);
    const index = ref(234);
    const o = ref({ a: { b: { c: { d: 123 } } } });
    const updateCount = () => count.value++;
    const updateIndex = () => index.value--;
    const stopWatchCount = watch(
      [count],
      () => {
        console.log("count change");
      },
      {
        // 该watch的回调函数初始化执行一次
        immediate: true,
        // 深度监听
        deep: true,
      }
    );
    // watch 的第一个参数表示监听的数据源
    // 第一个参数规范两种:ref或者()=>ref.value
    // watch(count, () => {
    //   console.log("count更新了");
    // });
    // watch(
    //   () => count.value,
    //   () => {
    //     console.log("count更新了");
    //   }
    // );
    // 多个数据源变化，但是变化后执行的逻辑是相同的
    // watch([count, index], () => {
    //   console.log("index/count更新");
    // });
    // 深度监听
    const updateO = () => o.value.a.b.c.d++;
    watch(
      [o],
      () => {
        console.log("o被更新了");
      },
      { deep: true }
    );
    return { count, updateCount, index, updateIndex, stopWatchCount, updateO };
  },
};
</script>
