<template>
  <Suspense>
    <MvSon />
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
import MvSon from "./children/MvSon.vue";

export default {
  components: { MvSon },
  setup() {},
};
</script>
