const jsonfile = require('jsonfile')

const moment = require('moment')

const FILE_PATH = '/data.json'

const DATE = moment().format();

const data = {
    date:DATE
}

jsonefile.writeFile(FILE_PATH,)