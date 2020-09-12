const { app, dialog } = require('electron')
const path = require('path')

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