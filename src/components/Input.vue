<template>
  <div class="ipt">
    <input
      v-bind="$attrs"
      class="ipt-inner"
      :value="value"
      @input="inputHandler"
      :type="type"
    />
    <span @click="clear" class="icon-[ooui--clear]" v-show="isClearable"></span>
    <div v-show="showPassword" @click="isPasswordVisible = !isPasswordVisible">
      <span
        v-if="isPasswordVisible"
        class="icon-[heroicons-outline--eye]"
      ></span>
      <span v-else class="icon-[mdi--eye-off-outline]"></span>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup(props, context) {
    const isPasswordVisible = ref(false);
    const inputHandler = (e) => {
      context.emit("update:value", e.target.value);
    };
    const clear = () => {
      context.emit("update:value", "");
    };
    const isClearable = computed(() => {
      return props.clearable && props.value.length > 0;
    });
    const type = computed(() => {
      if (props.showPassword && !isPasswordVisible) {
        return "password";
      } else {
        return "text";
      }
    });
    return { isPasswordVisible, inputHandler, clear, isClearable, type };
  },
  // emits配置的第二种写法
  // 第一种：emits: ["abc"] 这个只是表明有abc这样的自定义事件存在 没有考虑传递参数！！！
  emits: ["update:value"],
  props: {
    value: {
      required: true,
      type: String,
    },
    clearable: {
      default: false,
      type: Boolean,
    },
    showPassword: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.ipt {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.ipt-inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.ipt-inner:focus {
  outline: none;
  border-color: #409eff;
}
.ipt-inner:hover {
  border-color: #c0c4cc;
}
</style>
