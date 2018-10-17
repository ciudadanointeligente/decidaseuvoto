var assert = require('assert');
var _ = require('lodash');
var candidatos = require('../candidatos.js');
var questions = require('../questions.js');

describe('Candidatos', function() {
    it('instanciamiento y devuelve id', function() {
	    assert.ok(candidatos.length);
	    _.each(candidatos, function(candidato){
		    assert.ok(candidato.name);
		    assert.ok(candidato.image);
		    // assert.ok(candidato.positions.length);
		    // Esto va en otro test
		    assert.ok(candidato.id.length);
	    });

    });
    it('Adoptan posiciones', function() {
	    assert.ok(candidatos.length);
	    _.each(candidatos, function(candidato){
		    assert.ok(candidato.positions.length);
	    });

    });
});

describe('Preguntas', function() {
    it('instanciamiento', function() {
	    assert.ok(questions.length);
	    _.each(questions, function(question){
		    assert.ok(question.name);
		    assert.ok(question.id);
	    });
    });
    it('tienen posiciones', function() {
	    assert.ok(questions.length);
	    var position_ids = [];
	    _.each(questions, function(question){
		    assert.ok(question.positions.length);
		    _.each(question.positions, function(position){
		    	assert.ok(position.label.length);
		    	assert.ok(position.id);
		    	assert.ok(position_ids.indexOf(position.id) === -1);
		    	position_ids.push(position.id);
		    });


	    });
	    assert.ok(position_ids.length);

    });
});
