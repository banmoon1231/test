<template>
  <div
    :class="['btn', `btn-${type}`, { 'btn-round': round }]"
    @click="emit('click')"
  >
    <slot />
  </div>
</template>
<script setup>
// 需要用到define的都可以不用导入 需要用到use的需要导入
// 除了props attrs slots expose emits之外的其他选项都可以用defineOptions来声明
// defineOptions的使用场景：配置需求超出了Vue3提供的API，那么可以使用它用Vue2的对应的选项配置兼容
// 比如在Vue3的API中没有定义组件名称的API  此时就可以使用defineOtions来提供name属性
// import { defineProps, defineEmits, defineExpose, useAttrs } from "vue";
const props = defineProps({
  type: {
    default: "default",
    validator(value) {
      return [
        "primary",
        "success",
        "info",
        "warning",
        "danger",
        "default",
      ].includes(value);
    },
  },
  round: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);
const a = 1;
const b = 2;
defineExpose({ a, b });
</script>
<style>
.btn {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
</style>
