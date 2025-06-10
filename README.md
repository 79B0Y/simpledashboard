# Simple Dashboard

## 项目简介
Simple Dashboard 是一个以 **Node.js** 搭配 **Express** 和 **MongoDB** 实现的简易仪表盘示例，界面使用 **Gridstack.js** 实现拖拽布局，并通过 **ECharts** 渲染图表。用户可在浏览器中点击 “Add Chart” 按钮自由添加图表，每个图表从 MongoDB 指定集合读取数据并以柱状图展示，适合学习整合前后端的最小实现。

## 目录结构
```
.
├── server.js          # Express 服务入口，提供 /data/:collection API 并托管静态文件
├── seed.js            # 初始化 MongoDB 示例数据
├── public/
│   └── index.html     # 前端页面，包含 Gridstack 布局与 ECharts 逻辑
├── package.json       # 项目依赖与 npm 脚本
├── package-lock.json
└── README.md
```

## 核心模块说明
- **server.js**：连接 MongoDB，使用通用模型按集合名查询数据，同时将 `public` 目录作为静态资源目录对外提供。
- **seed.js**：向 `sampledata` 集合写入示例文档，方便快速体验图表效果。
- **public/index.html**：前端单页应用，点击 “Add Chart” 后会动态添加组件并通过异步请求获取数据，随后用 ECharts 渲染柱状图。
- **package.json**：定义 `start` 与 `seed` 两个 npm 脚本以及所需依赖列表。

## Ubuntu 安装与运行
1. **安装 Node.js 与 npm**（若系统未自带）：
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm
   ```
2. **安装 MongoDB 并启动服务**：
   ```bash
   sudo apt install -y mongodb
   sudo service mongodb start
   ```
3. **克隆代码并安装依赖**：
   ```bash
   git clone https://github.com/yourname/simpledashboard.git
   cd simpledashboard
   npm install
   ```
4. **初始化示例数据**（确保 MongoDB 处于运行状态）：
   ```bash
   npm run seed
   ```
5. **启动服务器**：
   ```bash
   npm start
   ```
6. 打开浏览器访问 <http://localhost:3000>，点击 **Add Chart** 体验从 `sampledata` 集合读取并渲染的数据柱状图。
