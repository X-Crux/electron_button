const {app, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');
const os = require('os');

const openWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 250,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('./index.html');
    ipcMain.on('message', () => {
        fs.writeFileSync('Создано при помощи Electron.txt', os.platform());
    })
}

app.whenReady().then(openWindow)