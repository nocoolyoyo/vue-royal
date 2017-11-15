<!--左菜单组件-->
<template>
  <nav class="sidebar collpase">
    <div class="nav-logo">
      <img class="logo-label" src="../assets/logo.png">
      <div class="logo-title">数据协作平台</div>
    </div>
    <ul class="metismenu" id="menu">
      <li class="active">
        <a class="has-arrow" href="#" aria-expanded="true">
          <span class="fa fa-fw fa-github fa-lg"></span>
          metisMenu
        </a>
        <ul aria-expanded="true" class="collapse in" style="">
          <li>
            <a href="https://github.com/onokumus/metisMenu">
              <span class="fa fa-fw fa-code-fork"></span> Fork
            </a>
          </li>
          <li>
            <a href="https://github.com/onokumus/metisMenu">
              <span class="fa fa-fw fa-star"></span> Star
            </a>
          </li>
          <li>
            <a href="https://github.com/onokumus/metisMenu/issues">
              <span class="fa fa-fw fa-exclamation-triangle"></span> Issues
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class="has-arrow" href="#" aria-expanded="false">Menu 0</a>
        <ul aria-expanded="false" class="collapse">
          <li><a href="#">item 0.1</a></li>
          <li><a href="#">item 0.2</a></li>
          <li><a href="http://onokumus.com">onokumus</a></li>
          <li><a href="#">item 0.4</a></li>
        </ul>
      </li>
      <li id="removable">
        <a class="has-arrow" href="#" aria-expanded="false">Menu 1</a>
        <ul aria-expanded="false" class="collapse">
          <li><a href="#">item 1.1</a></li>
          <li><a href="#">item 1.2</a></li>
          <li>
            <a class="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
            <ul aria-expanded="false" class="collapse">
              <li><a href="#">item 1.3.1</a></li>
              <li><a href="#">item 1.3.2</a></li>
              <li><a href="#">item 1.3.3</a></li>
              <li><a href="#">item 1.3.4</a></li>
            </ul>
          </li>
          <li><a href="#">item 1.4</a></li>
          <li>
            <a class="has-arrow" href="#" aria-expanded="false">Menu 1.5</a>
            <ul aria-expanded="false" class="collapse">
              <li><a href="#">item 1.5.1</a></li>
              <li><a href="#">item 1.5.2</a></li>
              <li><a href="#">item 1.5.3</a></li>
              <li><a href="#">item 1.5.4</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a class="has-arrow" href="#" aria-expanded="false">Menu 2</a>
        <ul aria-expanded="false" class="collapse">
          <li><a href="#">item 2.1</a></li>
          <li><a href="#">item 2.2</a></li>
          <li><a href="#">item 2.3</a></li>
          <li><a href="#">item 2.4</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Siderbar',
  data() {
    return {
    };
  },
  mounted() {
    $('#menu').metisMenu()
  }
};
</script>

<style lang="scss" scoped>
  @import "static/modules/commonSCSS/variables.scss";
  @import "static/modules/commonSCSS/mixins.scss";
  $sidebar_bg: white;
  $sidebar_width: 220px;
  $sidebar_transition: .3s ease-out;


  .sidebar {
    $menu-c-primary: $theme-c-primary;

    $menu-c-bg-active: $c-milka;
    $menu-c-title: $c-ink;
    $menu-c-text: $c-ink;
    $menu-s-p-nav-link: 14px 20px 14px 25px;
    $menu-nav-logo-height: 60px;
    $menu-nav-logo-space-p: 10px 20px;
    $menu-logo-width:220px;
    $menu-logo-img-size:35px;

    width: $sidebar_width;
    height: 100%;
    background: $sidebar_bg;
    box-shadow: $box-shadow-box;
    z-index: 2;
    .nav-logo {
      user-select: none;
      height: $menu-nav-logo-height;
      background-color: $menu-c-primary;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      padding: $menu-nav-logo-space-p;
      position: relative;
      overflow-x: hidden;
      img{
        transition: opacity $sidebar_transition;
        width:$menu-logo-img-size;
        height:$menu-logo-img-size;
        opacity: 1;
      }
      .logo-title {
        font-family: serif;
        font-weight: 600;
        margin-left: 10px;
        overflow: hidden;
        word-break: keep-all;
        font-size: 20px;
        text-overflow: clip;
        color: $sidebar_bg;
        transition: opacity $sidebar_transition;
        width: auto;
        opacity: 1;
      }
    }



    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      background: $sidebar_bg;
    }
    .metismenu {
      background: $sidebar_bg;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;

      & +li {
        margin-top: 5px;
      }
      & li:first-child {
        margin-top: 5px;
      }
      & li:last-child {
        margin-bottom: 5px;
      }
      & > li {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        position: relative;
      }
      a {
        position: relative;
        display: block;
        padding: 13px 15px;
        color: $c-dream;
        outline-width: 0;
        transition: all .3s ease-out;
      }

      ul {
        a {
          padding: 10px 15px 10px 30px;
        }
        ul a {
          padding: 10px 15px 10px 45px;
        }
      }

      a {
        &:active, &:hover,&:focus{
          color: $c-ink;
          text-decoration: none;
          background: $c-milka;;
        }
      }
    }
  }

</style>
