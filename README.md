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
