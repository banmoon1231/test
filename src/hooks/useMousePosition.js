import { ref, onMounted, onBeforeUnmount } from "vue";
export function useMousePosition() {
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
}

// 新功能：实时获取鼠标位置
// 组合哪些API：ref, onMounted, onBeforeUnmount
// 通过定义一个函数 组合了vue3提供的API 去完成一个新的可以服用的API功能 =>自定义组合函数
