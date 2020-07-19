## 说明

> 基于 Vue 体系模拟企业开发的移动端单页面应用

> 使用了 Mock 和 axios 实现模拟数据 数据请求和前后端分离

> 利用 rem 布局 实现不同移动端的适用

## 项目运行

```bash
# 克隆到本地
git clone https://github.com/XsKss/HaveYouEaten

# 进入文件夹
cd HaveYouEaten

# 安装依赖
npm install

# 开启本地服务器localhost:8088
npm run serve

# 发布环境
npm run build
```

## 效果演示

## 项目结构

```
.
├── README.md
├── babel.config.js
├── dist //打包项目
├── package-lock.json
├── package.json
├── public
│ ├── css //iconfont 引入
│ ├── favicon.ico
│ └── index.html
├── src
│ ├── App.vue
│ ├── api
│ │ ├── axios.js
│ │ ├── data.js
│ │ ├── mock.js
│ │ └── mockServerData //模拟数据
│ ├── assets
│ ├── components
│ │ ├── MenuBar.vue //菜单栏
│ │ ├── ShowList.vue
│ │ ├── loading.vue
│ │ └── ratingStar.vue  //星级评分
│ ├── config  //Vue配置文件
│ │ ├── index.js
│ │ └── rem.js
│ ├── main.js
│ ├── router
│ ├── store
│ └── views //主要视图
│   ├── Find.vue
│   ├── Home.vue
│   ├── Mine.vue
│   └── Order.vue
└── vue.config.js
```
