<template>
  <div class="app">
    <!-- 导航栏Navigation组件 -->
      <Navigation/>
    <!-- 头部Header组件-->
      <Header/>
    

    <!-- 展示区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
  
</template>

<script lang="ts" setup name="App">
  import Navigation from './components/Navigation.vue';
  import Header from './components/Header.vue';
  //路由
  import {RouterView,RouterLink} from 'vue-router'

</script>

<style scoped>
.app{
  width: 100%;
}

.navigate{
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  margin: 40px auto;
}

/* 这个样式起到版心的作用……大概吧 */
.content{
  height: 500px;
  padding-left: 200px;
  margin-top: 20px ;
}
</style>
