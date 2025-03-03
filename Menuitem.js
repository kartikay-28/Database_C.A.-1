const mongoose = require('mongoose');

const MenuitemSchema = new mongoose.Schema({
    Name :{
        Type: String,
        required: true
    },

    Cost :{
        Type: Number,
        required: true
    }
});

const Menu = mongoose.model("Menu",MenuitemSchema);

module.exports = Menu ;
