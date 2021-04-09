const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema
    (
        {
            name: {
                type: String,
                trim: true,
                require: true,
                maxlength: 32,
            },

            discription: {
                type: String,
                require: true,
                maxlength: 2000,
            },
            price: {
                type: Number,
                require: true,
                maxlength: 2000,
            },
            category: {
                type: Objectid,
                ref: 'Category',
                required: true,
            },
            quantity: {
                type: Number,
                require: true,
            },
            photo: {
                data: Buffer,
                conentType: String,
            },
            shipping: {
                required: false,
                type: Boolean
            },


        }, { timestamps: true }
    );



let User = mongoose.model("Product", productSchema);
module.exports = User;