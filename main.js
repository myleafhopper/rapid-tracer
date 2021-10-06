/* ------------------------------------------------------------
node public/main.js
------------------------------------------------------------ */

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
let mainWindow;

app.on('ready', createWindow);
app.on('window-all-closed', closeAllWindows);
app.on('activate', activeWindow);

/* ------------------------------------------------------------
FUNCTIONS
------------------------------------------------------------ */

function createWindow() {

    mainWindow = new BrowserWindow(getBrowserWindowSetup());
    mainWindow.loadURL(getWindowUrl());
    mainWindow.maximize();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function getBrowserWindowSetup() {

    return {
        width: 1600,
        height: 800,
        minWidth: 1600,
        minHeight: 800,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    }
}

function getWindowUrl() {

    const path = require('path');
    const indexPath = path.join(__dirname, '/build/index.html');

    return process.platform === 'win32' ?
        'http://localhost:3000' :
        `file://${indexPath}`
}

function closeAllWindows() {

    if (process.platform !== 'darwin') {
        app.quit();
    }
}

function activeWindow() {

    if (mainWindow === null) {
        createWindow();
    }
}