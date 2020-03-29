<template id="mynav">
    <el-col :span=12>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(0, 109, 103)"
            text-color="#000"
            active-text-color="#fff"
            router
        >
        <el-submenu>
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item index="userInformation">用户信息</el-menu-item>
            <el-menu-item index="userPublish">用户发布</el-menu-item>
            <el-menu-item index="userCollection">用户收藏</el-menu-item>
            <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group> -->
            <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-5">选项5</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
        </el-submenu>
        <el-menu-item index="adminInformation">
            <i class="el-icon-menu"></i>
            <span slot="title">管理员管理</span>
        </el-menu-item>
        <el-menu-item index="offMaterial">
            <i class="el-icon-document"></i>
            <span slot="title">官方素材管理</span>
        </el-menu-item>
        <el-menu-item index="userMaterial">
            <i class="el-icon-setting"></i>
            <span slot="title">用户素材管理</span>
        </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>
export default {
    name:"mynav",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
#mynav{
    height: 100%;
}
.el-menu{
    border:none;
}
.el-col{
    width: 15%;
    height: 100%;
    min-width: 150px;
    background-color: rgb(0, 109, 103);
}
.el-submenu .el-menu-item{
    min-width: 15%;
}
</style>