'use strict'
var candidatos = require('./candidatos.js');
var questions_ = require('./questions.js');
var _ = require('lodash');



var getQuestionFromAnswerId = function(answer_id){
    var result;
    _.each(questions_, function(question){
        var position = _.find(question.positions, {'id': answer_id});
        if(position !== undefined){
            result = question;
            return false;
        }
    });
    return result;
}

var getCompatibilityWith = function(candidato, answers){
    let resultado = {};
    let questions = [];
    let percentage = 0;

    let answered_by_candidate = Object.keys(candidato.positions);
    answered_by_candidate = _.map(answered_by_candidate, function(e){return parseInt(e);});
    let answered = _.intersection(answers, answered_by_candidate);
    _.each(answered, function(answer){
        let position = candidato.positions[answer];
        let original_answer = getQuestionFromAnswerId(answer);
        let question = {
            description: position.description,
            position_label: _.find(original_answer.positions, {'id': answer}).label,
            position_id: answer,
            source: position.source,
            position_text: original_answer.name
        };
        questions.push(question);
    });
    resultado.questions = questions;
    resultado.candidato = candidato;
    resultado.percentage = (answered.length/(answers.length)) * 100;
    return resultado;
};

var getAllResults = function(answers){
    var resultados = [];
    _.each(candidatos, function(candidato){
        resultados.push(getCompatibilityWith(candidato, answers));
    });
    return resultados;
};

var Calculadora = function(answers){
    var resultados = getAllResults(answers);
    this.resultado = _.sortBy(resultados,'percentage').pop();
};

module.exports = Calculadora;