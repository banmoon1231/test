<template>
  <div>
    <router-view />
    <h1>{{ count }}</h1>
    <button @click="increaseCount">增加count</button>
    <button @click="decreaseCount">减少count</button>
    <h2>{{ user.name }}&{{ user.age }}</h2>
    <h4 v-for="item in list" :key="item">{{ item }}</h4>
    <button @click="pushRandom">添加随机数</button>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from "vue";
export default {
  // setup 配置项 vue3独有
  // setup一方面是一个新的生命周期(相当于vue2中的beforeCreate + created = setup)
  // 另一方面是vue3 api的入口
  setup() {
    const count = ref(0);
    const increaseCount = () => {
      return count.value++;
    };
    const decreaseCount = () => {
      return count.value--;
    };

    // 定义对象类型一般使用reactive
    const user = reactive({ name: "li", age: 18 });
    // 对reactive响应式数据解构会失去响应式  解决办法借助toRefs
    const { name, age } = toRefs(user);
    // reactive用基本数据类型数据初始化 错误演示
    const index = reactive(123);
    console.log(index);
    // reactive 用数组初始化
    const list = reactive([1, 2, 3]);
    const pushRandom = () => {
      return list.push(Math.random());
    };
    return { count, increaseCount, decreaseCount, user, list, pushRandom };
    // console.log("setup");
    //与data选项等价的api vue3的api都是模块化的
    // vue3的api 基本都是函数 createApp、ref
    // const msg = ref("abc");
    // const count = ref(123);
    // const fn = () => {
    //   console.log(msg.value);
    // };
    // onMounted(() => console.log(count.value));
    // 在setup模版语法中需要使用的变量就返回
    // return { msg, fn, count };
  },
};
</script>
