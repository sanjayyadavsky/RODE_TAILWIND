const jsonfile = require('jsonfile')
const moment = require('moment')

const FILE_PATH = "/test.js"
const DATE = moment().format();
const data = {
    date:DATE
}
console.log(moment)
// jsonfile.writeFile(FILE_PATH)
