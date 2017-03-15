/* Dependencies:
***********************************************************/

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


/* Initialize 'win' (app window):
***********************************************************/

let win;


/* Create window — specifying the view:
***********************************************************/

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/img/icon.png'
    });

    // Load 'index.html'
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools:
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null
    });
}


/* On 'ready', run the createWindow function:
***********************************************************/

app.on('ready', createWindow);


/* On 'window-all-closed', quit the app:
***********************************************************/

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
