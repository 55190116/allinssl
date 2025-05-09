# ALLinSSL 前端项目

## 项目简介

ALLinSSL是一个基于Monorepo架构的前端项目，使用Turborepo进行工作区管理，专注于提供SSL证书的申请、管理、部署和监控等功能。项目采用模块化设计，将通用功能抽象为独立包，提高代码复用性和可维护性。

## 技术栈

- **框架**：Vue 3.5.x
- **开发语言**：TypeScript
- **包管理工具**：pnpm 9.0.0
- **Monorepo方案**：Turborepo
- **构建工具**：Vite 6.x
- **状态管理**：Pinia 2.x
- **路由**：Vue Router 4.x
- **UI组件库**：Naive UI 2.x
- **CSS框架**：TailwindCSS 3.x
- **国际化**：Vue I18n 11.x
- **测试工具**：Vitest

## 项目结构

```
frontend/
├── apps/                 # 应用目录
│   └── allin-ssl/        # SSL证书管理应用
├── packages/             # 共享包目录
│   ├── hooks/            # 可复用的Vue Hooks
│   ├── i18n/             # 国际化相关功能
│   ├── naive-ui/         # UI组件库封装
│   ├── pinia/            # 状态管理相关功能
│   ├── router/           # 路由相关功能
│   ├── utils/            # 通用工具函数
│   └── vite/             # Vite相关配置和插件
├── environment/          # 环境配置
│   ├── eslint/           # ESLint配置
│   ├── prettier/         # Prettier配置
│   ├── stylelint/        # Stylelint配置
│   └── typescript/       # TypeScript配置
├── plugin/               # 项目插件
│   ├── plugin-i18n/      # 国际化插件
│   ├── project-ftp-sync/ # FTP同步插件
│   └── project-sync-git/ # Git同步插件
├── scripts/              # 脚本目录
├── types/                # 全局类型定义
└── turbo.json            # Turborepo配置
```

## 应用

### allin-ssl

SSL证书管理平台，提供证书申请、管理、部署、监控等功能，帮助用户轻松管理和部署SSL证书，保障网站安全。

## 共享包

- **hooks**: 提供常用的Vue Hooks，简化组件逻辑
- **i18n**: 国际化解决方案，支持多语言切换
- **naive-ui**: 封装和扩展Naive UI组件库
- **pinia**: 封装Pinia状态管理相关功能
- **router**: 封装路由相关功能
- **utils**: 提供常用工具函数和助手方法
- **vite**: Vite相关配置和插件

## 环境与规范

- **eslint**: 代码质量检查配置
- **prettier**: 代码格式化配置
- **stylelint**: 样式质量检查配置
- **typescript**: TypeScript配置

## 插件

- **plugin-i18n**: 国际化插件，支持自动提取和生成国际化资源
- **project-ftp-sync**: FTP同步插件，用于部署前端资源
- **project-sync-git**: Git同步插件，用于代码同步

## 安装

### 环境要求

- Node.js >= 18.x
- pnpm >= 9.0.0

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

## 开发命令

```bash
# 启动所有应用的开发服务
pnpm dev

# 只启动ALLinSSL应用
pnpm dev --filter allin-ssl

# 构建所有应用
pnpm build

# 只构建ALLinSSL应用
pnpm build --filter allin-ssl

# 运行代码检查
pnpm lint

# 运行类型检查
pnpm check-types

# 运行测试
pnpm test

# 清理构建缓存
pnpm clear
```

## 开发指南

### 新建应用

1. 在 `apps` 目录下创建新的应用目录
2. 初始化应用配置文件和依赖
3. 在应用的 `package.json` 中添加对共享包的依赖

### 使用共享包

在应用或其他包的 `package.json` 中添加依赖，例如：

```json
"dependencies": {
  "@baota/utils": "workspace:*",
  "@baota/hooks": "workspace:*"
}
```

### 开发规范

1. 遵循项目的代码风格和组织方式
2. 共享功能应提取到 `packages` 目录下的相应包中
3. 应用特定功能应保留在各自的应用目录中
4. 使用TypeScript进行类型定义
5. 编写测试用例确保功能正确性

## 部署

### 构建生产版本

```bash
pnpm build
```

### FTP部署

使用内置的FTP同步插件进行部署：

```bash
pnpm build
# 自动部署到配置的FTP服务器
```

## 浏览器兼容性

- Chrome >= 60
- Firefox >= 55
- Safari >= 11
- Edge >= 79
