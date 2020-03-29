# 学习计划

### 1、基础知识学习

|            |      |                    |      |
| :--------: | :--: | :----------------: | :--: |
|  模板语句  |  √   |     自定义指令     |  √   |
|  条件语句  |  √   |        路由        |  √   |
|  循环语句  |  √   |        过渡        |  √   |
|  监听属性  |  √   |        混入        |      |
|  样式绑定  |  √   |    Ajax(axios)     |      |
| 事件处理器 |  √   | Ajax(vue-resource) |      |
|    表单    |  √   |      响应接口      |      |
|    组件    |  √   |        实例        |      |

### 2、vuecli 使用

使用npm淘宝镜像
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：

```
$ cnpm install [name]
```

#### 命令行工具

Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。


```
\# 全局安装 vue-cli

$ cnpm install --global vue-cli

\# 创建一个基于 webpack 模板的新项目

$ vue init webpack my-project

\# 这里需要进行一些配置，默认回车即可

进入项目，安装并运行：

$ cd my-project
$ cnpm install
$ cnpm run dev
```



### 3、后台管理系统

#### 框架搭建

使用第三方组件：[element]( https://element.eleme.cn/#/zh-CN )

使用路由及自定义组件，搭建框架