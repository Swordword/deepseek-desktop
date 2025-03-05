import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, '../../assets/icons/icon-512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // 允许加载外部资源
    }
  });

  // 加载 DeepSeek 网页
  mainWindow.loadURL('https://chat.deepseek.com/');
  
  // 只在开发环境打开开发者工具
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 