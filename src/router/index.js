// 导入路由实例和历史记录模式
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// 配置实例  createRouter:创建router
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
