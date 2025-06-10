# Simple Dashboard

## 项目简介
Simple Dashboard 是一个最小化的仪表盘示例，类似于 **n8n** 的面板功能。后端采用 Node.js 与 Express 搭配 MongoDB 提供数据接口，前端使用 Gridstack.js 负责拖拽布局，图表渲染则由 ECharts 完成。用户可以在界面上自由添加图表，每个图表从 MongoDB 指定集合读取数据并以柱状图形式展示。

## 目录结构
```
.
├── server.js          # Express 服务入口，提供 /data/:collection 接口并托管静态文件
├── seed.js            # 初始化 MongoDB 示例数据
├── public/
│   └── index.html     # 前端页面，包含 Gridstack 与 ECharts 逻辑
├── package.json       # 项目依赖与 npm 脚本
├── package-lock.json
└── README.md
```

## 核心模块说明
- **server.js**：连接 MongoDB，暴露 REST 接口读取指定集合的数据，同时将 `public` 目录作为静态资源目录。
- **seed.js**：向 `sampledata` 集合写入示例文档，便于快速演示。
- **public/index.html**：前端单页应用，点击 “Add Chart” 即可新增图表组件，数据通过调用后端接口获取。
- **package.json**：定义了 `start` 与 `seed` 两个 npm 脚本，并声明所需依赖。

## Ubuntu 安装步骤
1. **安装 Node.js 与 npm**（若系统未自带）：
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm
   ```
2. **安装 MongoDB**：
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
4. **初始化示例数据**（确保 MongoDB 服务已启动）：
   ```bash
   npm run seed
   ```
5. **启动服务器**：
   ```bash
   npm start
   ```
6. 打开浏览器访问 <http://localhost:3000>，点击 **Add Chart** 即可看到从 `sampledata` 集合读取的数据柱状图。

