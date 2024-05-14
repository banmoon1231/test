<template>
  <Suspense>
    <searchSon />
    <template #fallback>
      <div>加载中。。。</div>
    </template>
  </Suspense>
</template>
<script>
import searchSon from "./children/searchSon.vue";

export default {
  components: { searchSon },
  setup() {},
};
</script>
