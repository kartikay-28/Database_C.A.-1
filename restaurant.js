const mongoose = require('mongoose')
const Menu = require('./Menuitem')

const restaurant = new mongoose.Schema({
    Name: {
        Type:String,
        required: true
    },
    location: {
        Type:String,
        required:true
    },
    Items: {
        Type:[Menu]
    }

})

const rest = mongoose.model("rest",restaurant);

module.exports = rest ;

