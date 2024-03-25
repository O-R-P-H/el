const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            // Включаем поддержку JavaScript
            javascript: true
        }
    });

    win.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : `file://${path.join(__dirname, 'dist/index.html')}`);
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
