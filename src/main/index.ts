import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// 优化进程性能
app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
app.commandLine.appendSwitch('disable-site-isolation-trials');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // 禁用不必要的功能
      webSecurity: true,
      allowRunningInsecureContent: false,
      // 优化内存使用
      backgroundThrottling: true,
      // 优化渲染进程
      offscreen: false,
    },
    // 优化窗口创建
    show: false,
    backgroundColor: '#ffffff',
    icon: path.join(__dirname, '../../assets/icons/icon-512.png'),
  });

  // 窗口准备好后再显示
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 加载 DeepSeek 网页
  mainWindow.loadURL('https://chat.deepseek.com/');

  // 优化内存使用
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.setBackgroundThrottling(true);
  });

  // 开发环境打开开发者工具
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

// 应用准备就绪时创建窗口
app.whenReady().then(createWindow);

// 所有窗口关闭时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// macOS 点击 dock 图标时重新创建窗口
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 