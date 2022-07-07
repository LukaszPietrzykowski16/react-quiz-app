const mongoose = require('mongoose')

const gumballQuestions = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },  
    answer1: [{type: String}, {type: Boolean}],
    answer2: [{type: String}, {type: Boolean}],
    answer3: [{type: String}, {type: Boolean}],
    answer4: [{type: String}, {type: Boolean}],

})

module.exports = mongoose.model('GumballQuestions', gumballQuestions)