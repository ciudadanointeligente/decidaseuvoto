
var data = require('./banco_de_dados.js');
var _ = require('lodash');


function Question(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.positions = obj.positions;
};

var questions = [];
_.each(data.questions, function(question_data){
    questions.push(new Question(question_data));
});
module.exports = questions;
