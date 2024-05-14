<template>
  <div>
    <ol>
      <li v-for="item in blocks" :key="item.blockCode">
        {{ item.blockCode }}
      </li>
    </ol>
    <co-button ref="button" index="123">按钮测试</co-button>
  </div>
</template>

<script setup>
import { useRequest } from "../hooks";
import { getHomePageData } from "../service";
import { ref, onUpdated } from "vue";
// 使用setup 后整个<script setup>标签内容就是原来setup函数的函数体
// 如果需要使用异步依赖  直接在顶层使用await是支持的
// 模版中需要使用setup中的数据集 只需要在setup script定义的变量和函数 都会自动返回
// 组件直接导入就可使用  省略注册过程

// 使用<script setup>后
// 1.组件props如何定义，如何取值
// 2.组件的自定义事件如何定义，如何触发
const { data: blocks, run } = useRequest(getHomePageData, {
  formatResult: (res) => res.data.data.blocks,
  manual: true,
});
console.log(blocks);
const button = ref(null);
// 在源代码中将函数run中的返回值变为promis函数 后直接使用await达到效果
run();
onUpdated(() => {
  console.log(button.value);
  console.log("数据更新 UI渲染完成功能之后");
});
</script>

<style></style>
