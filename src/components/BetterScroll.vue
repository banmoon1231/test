<template>
  <div ref="wrapper" :class="[{ flex: option.scrollX }, 'overflow-hidden']">
    <div :class="{ 'flex flex-1': option.scrollX }">
      <slot />
    </div>
  </div>
</template>
<script></script>
<script setup>
import { defineProps, ref, onMounted, watch } from "vue";
import BScroll from "@better-scroll/core";
const wrapper = ref(null);
onMounted(() => {
  const bs = BScroll(wrapper.value, props.option);
  // watch()
  watch(
    () => props.dep,
    () => nextTick(bs.refresh)
  );
});
const props = defineProps({
  dep: {},
  option: {
    type: Object,
    default: () => ({
      scrollY: true,
      click: true,
    }),
  },
});
</script>
<style></style>
