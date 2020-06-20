const electron = require('electron')

function createWindow () {
  const win = new electron.BrowserWindow({
    width: 960,
    height: 540,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

const init = () => {
  createWindow()
  electron.ipcMain.on('schoolAdd', (e, d) => {
    console.log(d)
    e.returnValue = 0
  })
}

electron.app.on('ready', init)
