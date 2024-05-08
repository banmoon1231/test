<template>
  <div class="w-[300px] h-[300px] bg-purple-500" v-if="visible">
    <span @click="close">X</span>
  </div>
</template>
<script>
export default {
  setup() {
    const close = () => {
      emit("close");
    };
    return { close };
  },
  props: ["visible"],
  emits: ["close"],
};
</script>
