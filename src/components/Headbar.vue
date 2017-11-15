<!--头部工具栏组件-->
<template>

  <nav class="headbar navbar navbar-light">
    <a class="btn btn-primary " href="#">
      <i class="fa fa-bars"></i>
    </a>
    <form class="form-inline">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </form>

  </nav>

</template>

<script>
export default {
  name: 'Headbar',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "static/modules/commonSCSS/variables.scss";
  @import "static/modules/commonSCSS/mixins.scss";

  $sidebar_bg: white;
  $headbar_height: 60px;
  $sidebar_transition: .3s ease-out;
  .headbar {
    height:$headbar_height;
    background-color: $sidebar_bg;
    box-shadow: $box-shadow-box;
  }

</style>
