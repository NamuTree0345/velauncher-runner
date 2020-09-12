const { app, dialog, BrowserWindow } = require('electron')
const path = require('path')

let window

if(process.defaultApp) {
    if(process.argv.length >= 2) {
        app.setAsDefaultProtocolClient('velauncher', process.execPath, [path.resolve(process.argv[1])])
    }
} else {
    app.setAsDefaultProtocolClient('velauncher')
}

app.on('open-url', (event, url) => {
    console.log(url)
})

app.whenReady().then(() => {
    window = new BrowserWindow({
        height: 800,
        width: 800
    })

    window.loadFile(path.join(__dirname, 'index.html'))
})