import { createApp } from "vue";
import { Swipe, SwipeItem, Image, Popup } from "vant";
// import "vant/lib/index.css";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import Button from "./components/button/Button.vue";
import Input from "./components/Input.vue";
import drawer from "./components/drawer";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.component("co-button", Button);
app.component("Input", Input);

app.use(drawer);

// Vue.component(组件名， 组件配置)；
// app.component(组件名， 组件配置)；
// createApp().component(组件名， 组件配置)；

app.use(router).use(Antd).mount("#app");

/**
 * vue3和vue2生命周期的对应关系
 * 注意 如果使用了async setup(){}之后 必须放在第一个await之前
 * beforeCreate      setup
 * created           setup
 * beforeMount       onMounted
 * mounted           onMounted
 * beforeUpdate      onUpdated
 * updated           onUpdated
 * beforeDestroy     onBeforeUnmount
 * destroied         onUnmounted
 * Vue3语法糖 （更加简洁的Vue3语法） <script setup>
 */
