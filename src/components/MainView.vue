<!--主视图组件-->
<template>
  <main class="hello">
    <div class="slides-menu"></div>
    <div class="frames-group">

    </div>
  </main>
</template>

<script>
export default {
  name: 'MainView',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "static/modules/commonSCSS/variables.scss";
  @import "static/modules/commonSCSS/mixins.scss";

  main {
    height: 100%;
    width: 100%;
    background-color: $c-milka;

    $height_slidesMenu: 40px;
    .slides-menu {
      height:$height_slidesMenu;
      background-color: white;
      width: 100%;
    }

  }

</style>
