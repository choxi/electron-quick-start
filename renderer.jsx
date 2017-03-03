const electron      = require('electron')
const remote        = electron.remote
const app           = remote.getGlobal("app")

const fs = require('fs')
let config = JSON.parse(fs.readFileSync(app.getAppPath() + "/config/config.json"))
console.log(config)
