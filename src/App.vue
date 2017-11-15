<template>
  <div id="app" class="layout">

    <sidebar class="layout-left"></sidebar>

    <div class="layout-right">
      <headbar></headbar>
      <main-view></main-view>
    </div>

  </div>
</template>

<script>
  import MainView from './components/MainView'
  import Headbar from './components/Headbar'
  import Sidebar from './components/Sidebar'

  export default {
    name: 'app',
    components: { MainView, Sidebar, Headbar }
  }

</script>

<style lang="scss">
  @import "../static/modules/commonSCSS/variables.scss";

  html, body {
    height:100%;
    width: 100%;
    overflow: hidden;
  }

  .layout {
    font-family: $baseFontFamily;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .layout-right {
      flex: 1;
    }
  }
</style>
