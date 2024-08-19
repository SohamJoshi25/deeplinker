const express = require('express')
const controller = require('../controllers/controller.app.js')
const router = express.Router()

router.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
})

router.get('/' , controller.homePage)
router.get('/create' , controller.createPage)
router.get('/delete' , controller.deletePage)

router.post('/api/' , controller.addURL)
router.post('/api/delete', controller.deleteURL);
router.get('/api/:url' , controller.getURL)

module.exports = router; 