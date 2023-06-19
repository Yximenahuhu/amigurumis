




const mainController = {
    home: (req,res) => {
        res.render('home',{title:"AMIGURUMIS"})
    },    
    contacto: (req,res) => {
        res.render('contacto',{title:"CONTACTESE CON AMIGURUMIS"})
    }    

}

module.exports = mainController;