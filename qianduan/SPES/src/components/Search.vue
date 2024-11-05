<template>
    <div class="search">
        <input type="text" placeholder="请输入搜索内容">
        <span>搜索</span>
    </div>
    
</template>
<script lang="ts" setup name="Search">

</script>

<style scoped>
    .search{
        height: 40px;
        max-width: 500px; 
        display: flex; 
        margin: 20px 0;
    }
    .search input:focus-within{
        border-color: orange;
    }
    .search input{
        padding-top: 2px;
        box-sizing: border-box;
        border: 5px solid rgb(153, 153, 156);
        background-color: transparent;
        height: 40px;
        flex-grow: 1;

    }
    .search input::placeholder{
        height: fit-content;
        font-size: 22px;
        font-weight: 800;
        vertical-align: bottom;
    }
    .search span{
        margin-left: 20px;
        height: 40px;
        line-height: 40px;
        width: 70px;
        text-align: center;
        font-size: 25px;
        font-weight: 900;
        background-color: orange;
        box-sizing: border-box;
        border: 5px;
    }

</style>