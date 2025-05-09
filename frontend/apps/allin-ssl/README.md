# ALLinSSL

## 项目简介

ALLinSSL是一个SSL证书管理平台，提供证书申请、管理、部署、监控等功能，帮助用户轻松管理和部署SSL证书，保障网站安全。

## 技术栈

- 框架：Vue 3.5.x
- 开发语言：TypeScript
- 构建工具：Vite 6.x
- 状态管理：Pinia 2.x
- 路由：Vue Router 4.x
- UI组件库：Naive UI 2.x
- CSS框架：TailwindCSS 3.x
- 国际化：Vue I18n 11.x
- HTTP客户端：Axios
- 工具库：VueUse、UUID、CryptoJS等

## 项目结构

```
src/
├── api/                  # API接口定义
├── assets/               # 静态资源
├── components/           # 公共组件
├── config/               # 全局配置
├── locales/              # 国际化资源
├── router/               # 路由配置
├── styles/               # 全局样式
├── types/                # 类型定义
├── views/                # 页面组件
│   ├── autoDeploy/       # 自动部署
│   ├── authApiManage/    # API管理
│   ├── certApply/        # 证书申请
│   ├── certManage/       # 证书管理
│   ├── home/             # 首页
│   ├── layout/           # 布局组件
│   ├── login/            # 登录页面
│   ├── monitor/          # 监控页面
│   └── settings/         # 设置页面
├── App.tsx               # 应用根组件
└── main.ts               # 入口文件
```

## 功能模块

- **证书管理**：集中管理所有SSL证书，包括查看、更新、删除等操作
- **证书申请**：提供证书申请流程
- **自动部署**：自动部署SSL证书到目标服务器
- **监控系统**：监控证书状态，到期提醒等
- **系统设置**：系统全局配置管理

## 安装与运行

### 环境要求

- Node.js 16.x 或更高版本
- pnpm 7.x 或更高版本（推荐使用）

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

### 运行测试

```bash
pnpm test
```

### 代码检查

```bash
pnpm lint
```

## 开发指南

本项目采用模块化和组件化开发方式，开发新功能时请遵循以下原则：

1. 遵循项目已有的代码风格和组织方式
2. 新增API请在api目录下对应文件中添加
3. 公共组件放在components目录
4. 页面组件放在views目录下对应模块文件夹中
5. 路由配置自动导入
6. 使用CSS变量和TailwindCSS进行样式管理

## 浏览器兼容性

- Chrome >= 60
- Firefox >= 55
- Safari >= 11
- Edge >= 79

## 许可证

私有项目，未经授权不得使用
