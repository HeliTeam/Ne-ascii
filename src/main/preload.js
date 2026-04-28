const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getUsername: () => ipcRenderer.invoke('get-username'),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  saveFile: (dataUrl, filename) => ipcRenderer.invoke('save-file', dataUrl, filename),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
});
