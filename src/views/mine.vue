<template>
  <!-- <div ref="eleDiv">mine</div>
  <co-button ref="btn" @click="fn" abc="abc">按钮</co-button>
  <Input v-model:value="username" />
  <p>{{ username }}</p> -->
  <div class="relative">
    <!-- <MyComp :visible.sync="myCompIsVisible" /> -->
    <!-- <MyComp
      :visible="myCompIsVisible"
      @update:visible="(e) => (myCompIsVisible = e)"
    /> -->
    <!-- <MyComp v-model:visible="myCompIsVisible" /> -->

    <co-drawer
      v-model:open="isOpen"
      :mask="true"
      :maskCloseable="true"
    ></co-drawer>
    <co-button @click="isOpen = true">打开抽屉</co-button>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import MyComp from "../components/my-comp.vue";
export default {
  components: { MyComp },
  setup() {
    // const eleDiv = ref();
    // // eleDiv是引用数据类型 + 获取eleDiv.value的过程是一个异步过程
    // // console.log(eleDiv); // 可以在控制台看到
    // // console.log(eleDiv.value); // 看不到
    // onMounted(() => console.log(eleDiv.value));
    // const fn = () => console.log("button clicked!");
    // const btn = ref();
    // // onMounted(() => console.log("btn: round", btn.value.round));
    // onMounted(() => console.log("btn: a1", btn.value.a1));
    // onMounted(() => console.log("btn: f1", btn.value.f1));
    // const username = ref("123");
    const isOpen = ref(false);
    // console.log(username);

    // const myCompIsVisible = ref(true);
    return { isOpen };
  },
};
</script>
