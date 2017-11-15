<!--头部工具栏组件-->
<template>

  <nav class="headbar navbar navbar-light">
    <a class="btn btn-primary btn-icon-fix" href="#">
      <icon name="bars" scale="1"></icon>
    </a>
    <form class="form-inline">
      <input type="text" class="form-control" placeholder="搜索" aria-label="搜索" aria-describedby="basic-addon1">
    </form>

    <div class="btn-group">
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        苏丹的复仇
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </nav>

</template>

<script>
  import 'vue-awesome/icons/bars'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'Headbar',
    components: { Icon },
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
