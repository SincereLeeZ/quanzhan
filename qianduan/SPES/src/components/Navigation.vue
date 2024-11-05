<template>
    <div class="nav">
        <div class="nav-left" >
            <img src="/public/favicon.ico" alt="Logo">
            <RouterLink class="RouterLink" to="/首页" active-class="active">首页</RouterLink>
            <RouterLink class="RouterLink" to="/评估分排行" active-class="active">评估分排行</RouterLink>
            <RouterLink class="RouterLink" to="/参与评估" active-class="active">参与评估</RouterLink>
            <RouterLink class="RouterLink" to="/评估报告查询" active-class="active">评估报告查询</RouterLink>
        </div>
        <div class="nav-right">
            <span>登录</span><span>注册</span>
        </div>
    </div>
    
</template>

<script lang="ts" setup name="Navigation">
</script>

<style scoped>
/* #region 导航栏以及路由部分*/
.nav{
    display: flex;
    height: 50px;
    background-color: rgb(45,59, 85);
    justify-content: space-between;
    padding-left: 50px; padding-right: 50px;
}
.nav-left{
    display: flex;
}
.nav-right{
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 800;
    color:rgb(170, 170, 187);
    line-height:normal;
    line-height: 25px;
}
.nav-right span:nth-child(1){
    margin-right: 15px;
    padding-right: 15px;
    border-right: 5px solid rgb(170, 170, 187);
}
.nav-right span:hover{
    font-weight: 900;
    color: orange;
}
.RouterLink{
    font-size: 28px;
    font-weight: 800;
    color: rgb(170, 170, 187);
    text-decoration: none;
    text-align: center;
    justify-content: left;
    align-content: center;
    padding-left: 10px;padding-right: 10px;
}
.RouterLink:hover{
    font-weight: 900;
    color: orange;
}
.active{
    color: orange; 
}
img{
    box-sizing: border-box;
    padding: 5px;
    height: 50px;width: 50px;
    
}
/* #endregion */

</style>