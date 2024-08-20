const homePage = (req, res) => {
    res.render('view.home.ejs')
}
  
const createPage = (req, res) => {
    res.render('view.create.ejs')
}

const deletePage = (req, res) => {
    res.render('view.delete.ejs')
}

module.exports = {homePage,createPage,deletePage};