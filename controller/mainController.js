class mainController {
    static main (req, res) {
        res.render('main/home', {layout: 'main'})
    }
}

module.exports = mainController