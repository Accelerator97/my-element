<template>
  <div
    class="ben-card"
    :class="shadow?:'is' + shadow + '-shadow':'is-always-shadow'"
  >
  <!-- header有两种显示方式方式 1.slot传递 设置slot="header" 2.props传递  优先展示slot传递的内容-->
    <div class="ben-card_header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ben-card_body" :style="bodyStyle">

    </div>
  </div>
</template>

<script>
export default {
  name: "BenCard",
  props: {
    header: {},
    bodyStyle:{},
    shadow:{
        type:String
    }
  },
};
</script>

<style lang="scss" scoped>
</style>