const path = require('path');
const pdf = require('html-pdf');
const rpt001 = require('../reports/rpt001');

const Factory = function() {
}

Factory.export_rpt001 = function(data) {
    return new Promise(function(resolve, reject) {
        let fileLocation = path.join(__dirname, '../exports/rpt001.pdf');
        pdf.create(rpt001(data), {}).toFile(fileLocation, (err) => {
            if(err) return reject(err);
            else return resolve({ success: true });
        });
    });    
}

module.exports = Factory;