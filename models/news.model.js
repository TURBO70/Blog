const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
    title: String,
    desc: String,
    createdby: {
        type: Schema.Types.ObjectId,
        ref: 'user' 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('news', newsSchema);