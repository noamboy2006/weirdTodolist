const { ipcRenderer } = require('electron')

function clickButton()  {
  console.log(ipcRenderer.sendSync('main', 'hello'))
}
