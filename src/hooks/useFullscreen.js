import { ref, isRef } from "vue";

export const useFullscreen = (targetElement) => {
  const isFullscreen = ref(false);
  // 检测参数是否为ref数据
  const element = isRef(targetElement) ? targetElement : ref();
  // 进入全屏
  const enter = () => {
    // 检测参数是否为HTML元素
    if (!(element.value instanceof Element))
      throw new Error("useFullscreen的参数必须是一个HTML元素");
    element.value.requestFullscreen().then(() => {
      isFullscreen.value = true;
    });
  };
  // 退出全屏
  const exit = () => {
    document.exitFullscreen().then(() => {
      isFullscreen.value = false;
    });
  };

  // 切换全屏状态
  const toggle = () => (isFullscreen.value ? exit() : enter());
  return { enter, exit, toggle, isFullscreen };
};
