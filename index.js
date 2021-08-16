const { app, Tray, Menu } = require('electron')
const verify = require('./controller/healthcheck');

let tray = null
app.whenReady().then(() => {
    tray = new Tray('./assets/monitoring.png');

    setInterval(async () => {
        const isOk = await verify.healthcheck('http://localhost:3000');

        if(isOk === 'OK'){
            tray.setImage('./assets/check.png');
            tray.setToolTip('server is online');
        } else {
            tray.setImage('./assets/checked.png');
            tray.setToolTip('server is offline');
        }
    }, 5000);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})