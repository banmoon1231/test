<template>
  <div>
    <!-- v-model的改动 v-model需要传递双向绑定的属性参数-->
    <Comp v-model:keyName="value" />
    <Comp :key="value" @update:key="(e) => (value = e)" />
    <!-- v-bind:属性.sync 的兼容 .sync修饰符 已经被vue3弃用 因为b-model完全满足该需求-->
    <!-- <Comp :key.sync="value" /> 该写法已经弃用 下面效果等同 -->
    <Comp v-model="value" />
    <!--改动的内置组件-->
    <transition name="a">
      <div>vue2</div>
    </transition>
    <Transition name="b">
      <div>vue3</div>
    </Transition>
    <!-- 新增组件 -->
    <Suspense>
      <template #default>
        <!-- 渲染主体(组件) 提供异步依赖 async setup -- <template #default>可以省略不写-->
      </template>
      <template #fallback>
        <!-- 在渲染主体还没完成异步依赖的resolve时候渲染的元素 -->
      </template>
    </Suspense>
    <Teleport to="body">
      <!-- 突破当前组件的渲染区域，将当前内部内容元素渲染为to属性指定标签的内部(成为他的子节点) -->
    </Teleport>
  </div>
</template>
<script>
// vue2和vue3<script setup> 语法
export default {
  // 定义组件名称
  name: "", // defineOptions({name:''}) 不用主动导入，可以直接使用
  // 定义组件响应式数据
  data() {}, // ref,reactive API 在setup中
  methods: {}, // 普通函数 在setup中
  computed: {}, // computedAPI 在setup中
  watch: {}, // watchAPI  在setup中
  components: {}, // 导入直接使用  不需要任何配置
  props: {}, // defineProps在setup中  无需导入直接使用
  model: {}, // defineModel在setup中  无需导入直接使用
  beforeCreate() {}, // 在setup中
  created() {}, //在setup中
  beforeMount() {}, //onBeforeMount API 在setup中
  mounted() {}, // onMounted API 在setup中
  beforeUpdate() {}, // onBeforeUpdate API 在setup中
  updated() {}, // onUpdate API 在setup中
  beforeDestroy() {}, // onBeforeUnmount API 在setup中
  destroied() {}, // onUnmount API 在setup中
  /**vue2不在 选项中配置中的API */
  // this.$attrs  // const attrs = useAttrs()
  // this.$slots  // const slots = useSlots()
  /**vue3新增的API */
  // emits:['自定义事件名'] // defineEmits在setup中  无需导入直接使用
  //如果需求官方API不满足  则需要基于官方API封装自己的组合函数
};
</script>
<style scoped>
.a-enter {
  /* vue2过渡起始状态 */
}
.b-enter-from {
  /* vue3过渡起始状态 */
}
</style>
