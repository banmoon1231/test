<template>
  <div ref="wrapper" :class="[{ flex: option.scrollX }, 'overflow-hidden']">
    <div :class="{ 'flex flex-1': option.scrollX }">
      <slot />
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import { onMounted, ref, watch, nextTick } from "vue";
export default {
  setup(props) {
    const wrapper = ref(null);
    onMounted(() => {
      const bs = BScroll(wrapper.value, props.option);
      // watch()
      watch(
        () => props.dep,
        () => nextTick(bs.refresh)
      );
    });
    return { wrapper };
  },
  props: {
    dep: {},
    option: {
      type: Object,
      default: () => ({
        scrollY: true,
        click: true,
      }),
    },
  },
};
</script>
<style></style>
