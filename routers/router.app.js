const express = require('express')
const pagesController = require('../controllers/controller.pages.js')
const apiController  = require('../controllers/controller.api.js')
const router = express.Router()

router.get('/' , pagesController.homePage)
router.get('/create' , pagesController.createPage)
router.get('/delete' , pagesController.deletePage)

router.post('/api/' , apiController.addURL)
router.post('/api/delete', apiController.deleteURL);
router.get('/api/getallurls', apiController.getAllUrl);
router.get('/api/:url' , apiController.getURL)

module.exports = router; 