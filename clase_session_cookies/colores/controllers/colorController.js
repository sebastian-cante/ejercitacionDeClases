let colorController = {
    index: function(req, res, next){
        res.render("index");
      },

    mostraColor : (req, res) =>{
        req.session.color = req.body.color
        res.render('index', { color : req.session.color});
    },

    color : (req,res)=>{
        res.render('color', { color : req.session.color});
        if(req.body.recordar){
            res.cookie('recordar', req.body.color, {maxAge : 10000})
        }
    }



};

module.exports = colorController;