const pdf = require('html-pdf');
const rpt001 = require('../reports/rpt001');

const rptService = function() {
}

rptService.export_rpt001 = function(data) {
    return new Promise(function(resolve, reject) {
        pdf.create(rpt001(data), {}).toFile(`${__dirname}/exports/rpt001.pdf`, (err) => {
            if(err) return reject(err);
            else return resolve({ success: true });      
        });
    });    
}

module.exports = rptService;