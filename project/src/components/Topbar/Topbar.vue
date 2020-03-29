<template id="mytopbar">
    <div class="div">
        <i class="el-icon-switch-button"/>
        <p>admin</p>
        <img src="../../assets/girl.jpg" alt="头像"/>
    </div>
</template>

<script>
export default {
    name:"mytopbar"
}
</script>

<style>
.div{
    float: right;
    width: 85%;
    height: 8%;
    background-color: rgb(0, 103, 120);
}
.div img{
    float: right;
    height: 70%;
    border-radius: 50%;
}
.div p{
    float: right;
    line-height: 30px;
}
.div i{
    float: right;
}
</style>