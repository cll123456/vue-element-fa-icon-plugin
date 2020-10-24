<template>
  <i :class="['ef-icon', `ef-icon-${name}`]"></i>
</template>

<script>
export default {
  name: "EFIcon",
  props: {
    // 图标的名称
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/fonts/index.scss";

[class^="ef-icon-"], [class*="ef-icon-"] {
  font-family: 'ef-fonts';
  display: inline-block;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
