// vue3 api 模块化
// vue2 中对 vue 库是全量引用 不能做到按需引用
// vue3 几乎兼容所有的 vue2 的语法 平滑过渡
// vue3 推荐组合式 api
// vue3 干掉了一些

// vue2 中组件的配置项：选项式 api(vue2)
// vue3 推荐 组合式 api
/\*\*

- name
- data
- methods
- computed
- watch
- components
- mixins
- 生命周期
  \*/

  1.使用 createApp(根组件) 创建根组件

  2.setup == beforeCreate + created

  3.setup 是 vue3 的 Api(和 vue2 等价配置的 api)入口

  4.setup 函数返回的对象中的属性才能被模版使用

  5.使用 ref 定义响应式数据 ref 定义的数据都需要使用.value 取值 模版语法除外

  6.使用 reactive 定义响应式数据 不能用于基本数据类型的响应式数据定义 禁止对其解构一旦解构就会失去响应式

  7.ref 是 reactive 的语法糖(ref 就是基于 reactive 来实现的)

  ```js
  import { reactive } from "vue";
  const $ref = (initValue) => {
    return const value = reactive({ value: initValue });
  };
  const count = $ref(1)
  console.log(count.value)
  ```

  8.ref 可用于任意数据类型 reactive 仅用于对象 可以获取 DOM 节点/组件

  9.toRef：将 reactive 定义的响应式数据的某个属性转换为某个 ref 响应式数据

  10.toRefs：批量转换 解构保持响应式

  11.toRef：将 reactive 定义的响应式数据的某个属性转换为某个 ref 响应式数据

  12.onMounted 相当于 vue2 中的 mounted

13. 通过 createApp().component(组件名， 组件配置) 注册全局组件
14. setup 函数的第一参数是组件的 props 属性 （获取组件 props 属性值是最频繁操作）
15. setup 函数的第二参数是组件的 attrs、emit、slots、expose 的集合构成 context 对象
16. context.attrs => this.$attrs (属性)
17. context.emit => this.$emit （函数）
18. context.slots => this.$slots （属性）
19. context.expose 对外暴露组件的数据
20. 在 vue3 组件中 只有通过 emits 选项配置的事件名才被认定为自定义事件
    21.v-model 在 vue3 中的变化 v-model:key 可以传递参数 (在 vue2 中一个组件只能有一个 v-model)
    22.v-model 更新绑定的值的自定义事件发生了变化 update:key

```js
  <myComponent v-model='v1' />
  <myComponent :value='v1' @input(e)=>v1=e.target.value>

  <myComponent v-model:value='v1' v-model:index='v2'>
  <myComponent :value='v1' @update:value='(e)=>v1=e.target.value'
               :index='v2' @update:index=(e)=>v2=e.target.value>

```

23.使用 computed API 来定义计算属性

```jsx
import { ref, computed } from "vue";
export default {
  setup() {
    // ref在非模版语法中需要用到value
    const a = ref(1);
    const b = ref(2);
    // 定义计算属性 求a和b的和
    const sum = computed(() => a.value + b.value);
    const sum = computed({
      get: () => a.value + b.value,
      set: (value) => (a.value = b.value = value / 2),
    });
  },
};
```

24.watch/watchEffect 是一个组合式 API 需要按需引入 然后使用

25.watch 监听 ref 数据

26.如何取消 watch 的监听：watch 的返回值就是一个取消当前监听的函数 执行该函数就可以取消监听

27.watch 的第三个参数对象是可选的 immediate:true(初始化执行一次) deep:true(对于多层级嵌套数据使用)

```js
import { ref, watch } from "vue";
export default {
  setup() {
    const a = ref(1);
    const b = ref(2);
    // 监听单个ref
    watch(a, () => {
      console.log("a cahnge");
    });
    watch(
      () => a.value,
      () => {
        console.log("a cahnge");
      }
    );
    // 监听多个
    watch([a, () => b.value], () => {
      console.log("a/b change");
    });

    //万金油
    watch([ref1,ref2...],()=>{})
  },
};
```

28.watchEffect 99% 除了(第一次不执行、获取监听数据改变前的值) 使用 watch
29.nextTick 是一个组合式 API 需要按需引入 然后使用

30.Vue.use() =>app.use() this 的执行只在函数调用时才能确定

31. .sync 修饰符 弃用 v-model 兼容了

32. transition =>Transition

33.Teleport 新的内置组件

34.Suspense 组件作用(等待组件异步资源准备完成后渲染组件 异步加载过程中我们可以定义加载 loading)
(1).Suspense 提供两个插槽
default (渲染具有异步依赖[`async setup(){}`]主体)
fallback 在异步任务执行期间(pending->resolve)渲染的内容 一般用来渲染 loading

35.组合函数：开发者将 vue3 的 API 重新组合形成一个新的具有某种功能的 API ，从而形成逻辑复用

36 如何在<script setup>定义组件的 props 以及使用组件传入 props
// 答： defineProps
// 如何在<script setup>使用组件的 attrs 属性
// 答： useAttrs
// 如何在<script setup>定义组件的自定义事件以及触发组件的自定义事件呢
// 答： definedEmits

37.两个 vite 插件 (unpligin-auto-import、unplugin-vue-components)
unpligin-auto-import 自动帮开发者引入 vue 及其生态中提供的组合式 API (例如:onMounted ref reactive watch 等)
