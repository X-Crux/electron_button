window.addEventListener('DOMContentLoaded', () => {
    const {ipcRenderer} = require('electron');
    ipcRenderer.send('html', document.body.innerHTML);
})