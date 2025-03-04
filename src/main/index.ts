import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();
  // 在开发环境中加载 localhost:3000
  // if (process.env.NODE_ENV === 'development') {
  //   console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  //   mainWindow.loadURL('http://localhost:3000');
  //   mainWindow.webContents.openDevTools();
  // } else {
  //   // 在生产环境中加载构建后的文件
  //   mainWindow.loadFile(path.join(__dirname, '../../out/index.html'));
  // }
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