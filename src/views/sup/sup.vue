<template>
  <Suspense>
    <!-- 两个插槽 
      default 具有需要等待异步加载资源完成后渲染的组件 （渲染主体）
      fallback loading状态-->
    <sup-inner />
    <template #fallback>
      <div class="w-[100vw] h-[100vh] flex items-center justify-center">
        <span
          class="icon-[line-md--loading-alt-loop] w-[20vw] h-[20vw]"
          style="color: red"
        ></span>
      </div>
    </template>
  </Suspense>
</template>
<script>
import supInner from "./children/sup-inner.vue";
export default {
  components: { supInner },
};
</script>
