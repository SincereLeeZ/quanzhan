<template>
<div class="header">
        <!-- 头部标题区 -->
        <div class="header-head">
            <h1>智慧停车评估系统SPES</h1>
            <span>这里是简介，随便写点什么介绍</span>
            <span @click="alert1">了解更多</span>
            <!-- <Search/> -->
        </div>
    </div>
</template>
<script lang="ts" setup name="Header">
    import Search from './Search.vue';
    function alert1(){
        alert('hello sb!')
    }
</script>
<style scoped>
/* #region 头部*/
    .header-head{
        height: 260px;
        display: flex;
        flex-direction: column;
        background-color: rgb(45,59, 85);
        color: whitesmoke;
        padding-left: 200px;
        padding-top: 30px;
    }
    .header-head h1{
        font-size: 70px;
        font-weight: 900;
    }
    .header-head span{
        font-size: 28px;
        font-weight: 700;
    }
    .header-head span:nth-child(3){
        box-sizing: border-box;
        width: 250px;
        margin: 20px 0;
        padding: 5px 30px;
        font-size: 30px;
        text-align: center;
        background-color: orange;
    }
/* #endregion */
</style>