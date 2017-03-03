const electron      = require('electron')
const remote        = electron.remote
const app           = remote.getGlobal("app")

const fs = require('fs')
config = JSON.parse(fs.readFileSync(app.getAppPath() + "/config.json"))
console.log(config)
