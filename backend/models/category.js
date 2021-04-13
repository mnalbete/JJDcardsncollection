const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema
    (
        {
            name: {
                type: String,
                trim: true,
                require: true,
                maxlength: 32,
            },
            
            

        }, { timestamps: true }
    );



let User = mongoose.model("Category", categorySchema);
module.exports = User;