<template>
  <Teleport to="body">
    <Transition name="slide">
      <div
        v-show="open"
        class="min-w-[300px] h-[100%] bg-orange-300 absolute z-50 top-0 left-0"
      ></div>
    </Transition>
  </Teleport>
  <Teleport to="body">
    <div
      v-show="open && mask"
      class="fixed left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,.2)] z-40"
      @click="closeDrawer"
    ></div>
  </Teleport>
</template>
<script setup>
// 可以不引入definProps和defineEmits
// import { defineProps, defineEmits } from "vue";
const closeDrawer = () => {
  if (props.maskCloseable) {
    emit("update:open", false);
  } else {
    emit("update:open", true);
  }
};
const props = defineProps({
  open: {
    type: Boolean,
    require: true,
  },
  mask: {
    tyoe: Boolean,
    default: () => true,
  },
  maskCloseable: {
    tyoe: Boolean,
    default: () => true,
  },
});
const emit = defineEmits(["update:open"]);
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all ease-in-out 0.3s;
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-active {
  transition: all ease-in-out 0.3s;
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
