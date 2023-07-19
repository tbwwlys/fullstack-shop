- 移动商城使用lib-flexible rem 适配 assets/main.css 组织了css 的模块化
    (reset 样式组件 )

    - better-scroll 实现移动端的滚动（性能，体验）
    - 使用axios 封装http请求，拦截器，请求错误处理，请求loading
    - 使用less做样式预编译，变量，mixin，嵌套等css增强和模块化能力
    - 使用lib-flexible rem适配
    - 使用vant ui组件库，按需加载，减少打包体积
    - 使用three.js 数据可视化，echarts 数据可视化
    - 使用vue-router 做路由管理，路由懒加载，路由守备
    - 

- 功能细节
    - css 架构
        - css 入口文件main.css 模块化 base.css / theme.css
        - css4变量 维护更好
        - 移动端IE盒模型更好打理宽度
        - App.vue 全局样式，最外层容器水平方向不超出，垂直方向可以一直滚动，通用滑屏阅读模式
    - 路由管理 
        - history or hash
            原理
        - 路由懒加载
            加快首页渲染 按需加载
        - useRouter useRouter hooks 加载
            router 路由管理对象 跳转
            route 当前路由对象 params
        - 路由守卫
            登录校验跳转
            页面切换特效
    - 状态管理设计
        - 采用了pinia，更简单，函数化， 性能更好 
        - 分离式状态管理，而不是全局的
        - 采用的pinia 语法老版本 类似于vuex 
        - 使用步骤
            - defineStore pinia composition api
            - 第二个参数如果是对象， vuex写法，如果是函数呢， setup 语法
    - vant 组件库的使用
        使用vant-pull-refresh 实现下拉刷新
    - axios
        - api/ axios 统一配置 baseURL
            baseURL 开始的时候可能是fastmock
            上线阶段切换成 线上真实接口地址
        - 请求响应拦截
            
- 组件化介绍
    - 项目封装了Header/HomeHeader/Footer/AllTypes/GoodsList 等组件，页面由组件构成而不是标签
        组件树 vue-devtool
    - UI组件库（vant）通用组件 (components) 路由组件（pages）
        状态组件/无状态组件 父子组件（父子之间的传值）Layout组件 共享组件
        Suspense组件 Fragment组件 Portal组件
    - vant 组件库
        
    
- 功能设计
    - 登录 注册
    - 搜索
        - 使用vant-swiper 垂直滚动搜索热词
        - lazyload 防抖搜索
        - mysql like 查询返回
        - 升级到openai 接口查询
        - 搜索记录localStorage 存储展示
    - 首页幻灯片 使用vant-swipe
    - 数据库功能
        - 封装query 方法，sql 走query
            - mysql 数据库驱动
            - createPool 连接
            - pool.getConnection
            - 

- 项目特色
    - 代码风格良好，注意注释编写，提高代码
    - register/login 页面采用 copilot 代码辅助编写
        - copilot 分析出ui组件库为vant，template直接给出
            略微改改字段双向绑定样式就好
        - script copilot 自动完成 vue/ axios / submit / router 业务
        - 开发者新角色 给copilot 代码助理打辅助 
- 项目做了哪些优化
    - 按需加载vant组件库，减少打包体积
    - tree-shaking 不用的代码不打包
    - 路由的懒加载 按需加载 减少打包体积
        webpack splitChunks
    - iconfont 使用cdn加载，未来打包后的静态资源都会发布到cdn服务器
    - 图片懒加载
        - 首页幻灯片
    - es6 与项目结合
        - localStorage.setItem(), JSON.stringify()
            .getItem()
        - 深拷贝
            JSON.parse(JSON.stringify())
        - 搜索历史记录

    - html5 语义化标签
        - nav 导航
        - section 区分
        - article 重要
        - canvas video audio 功能标签
        - localStorage sessionStorage IndexDB 本地存储
        - web worker 多线程
        - history API
            - pushState
            - popState 单页应用的能力
        - form 表单的支持
            - input 的更多类型 
            - email tel range 
            - placeholder required pattern
        - websocket 实时聊天 双向
        - drag and drop 拖拽 github 拖拽上传
        - geolocation 地理定位 美团外卖
        - 摄像头和麦克风的支持 getUserMedia 语音识别

- vant 组件库的使用小结
    - van-swipe/van-swipe-item  轮播图
    - van-tabbar/van-tabbar-item 底栏 
    - van-pull-refresh 下拉刷新
    - js toast close
    - van-nav-bar header 
    
- 项目难点
    - 数据可视化
        在我的项目中，尝试了three.js 3D 可视化， 了解核心概念，并结合pinia
        watch，晚上3D显示和数据分离的店铺显示。
        - three.js
            - 对web 3D /虚拟现实 感兴趣，js底层可以， 学一下就好
            - 利用webGL 渲染3D模型
            - 利用canvas 元素
            - camera scene renderer
            - 模型概念 由外部导入
            - 灯光
            - 形状 + 材质
        - echarts.js
    -  购物车
        - 结合pinia，将购物车数据存储到数据库，实现购物数量徽章，详情页添加到购物车，购物车列表，购物车数量，以及清空购物车完整功能

- node 的实战与考点
    - MVC 路由对象
        - MVC
            - view model 不能直接通信
            - controller 作为中间层，通信
            - controller 接收用户信息
        - 路由的设计
            - restful 一切皆是资源
                名词加动词
            - 路由的功能
                - 中间件
                - prefix
                    /api/v1 全局的前缀
                    /users 模块前缀
        - node js 模块化层 commonjs
        - 错误处理
            - try catch 错误处理中间件 最后面
            - js是单线程 文件处理 数据库操作等 catch 
            - 自动重启 
