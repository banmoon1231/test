<template>
  <div class="w-[100vw] h-[100vh]">
    鼠标位置：x坐标({{ X }} )y坐标({{ Y }} )
  </div>
</template>
<script>
// beforeDestory =>onBeforeUnmount
import { onMounted, ref, onBeforeUnmount } from "vue";
export default {
  setup() {
    const X = ref(0);
    const Y = ref(0);

    const mouseMove = (e) => {
      X.value = e.x;
      Y.value = e.y;
    };

    onMounted(() => {
      window.addEventListener("mousemove", mouseMove);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("mousemove", mouseMove);
    });

    return { X, Y };
  },
};
</script>
