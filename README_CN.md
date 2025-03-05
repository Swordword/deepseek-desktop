# DeepSeek Desktop

[English](./README.md) | 简体中文

DeepSeek Desktop 是一个基于 Electron 的桌面客户端，让您可以更方便地使用 DeepSeek AI 服务。

## 功能特点

- 🚀 快速访问 DeepSeek AI 服务
- 💻 原生桌面应用体验
- 🌙 支持深色模式
- 🔒 安全可靠
- 🎨 优雅的用户界面

## 开发环境要求

- Node.js >= 18.20.7
- pnpm >= 8.0.0

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/yourusername/deepseek-desktop.git
cd deepseek-desktop
```

2. 安装依赖
```bash
pnpm install
```

3. 开发模式运行
```bash
pnpm dev
```

4. 打包应用
```bash
pnpm dist
```

## 构建产物

构建后的文件位于 `release` 目录：

- macOS: `DeepSeek Desktop-1.0.0.dmg` 和 `DeepSeek Desktop-1.0.0-mac.zip`
- Windows: `DeepSeek Desktop-Setup-1.0.0.exe` 和 `DeepSeek Desktop-1.0.0-win.zip`
- Linux: `DeepSeek Desktop-1.0.0.AppImage` 和 `DeepSeek Desktop-1.0.0.deb`

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- [Electron](https://www.electronjs.org/)
- [DeepSeek](https://chat.deepseek.com/) 