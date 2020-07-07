const router = require('express').Router();
const path = require('path');
const reportService = require('../services/reportService');
const appInfo = require('../package.json');

router.get('/status', (req, res, next) => {
    return res.send({
        success: true,
        version: appInfo.version
    });
});

router.post('/create-pdf', async (req, res) => {
    let data = await reportService.export_rpt001(req.body);
    return res.send({
        success: true,
        data: data
    });
});

router.get('/fetch-pdf', (req, res, next) => {
    let fileName = path.join(__dirname + '/../exports/rpt001.pdf');
    res.sendFile(fileName);
});

module.exports = router;