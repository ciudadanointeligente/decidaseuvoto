var assert = require('assert');
var _ = require('lodash');
var candidatos = require('../candidatos.js');
var questions = require('../questions.js');
var Calculadora = require('../calculator.js');
var app = require('../app.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('Candidatos', function() {
    it('instanciamiento y devuelve id', function() {
	    assert.ok(candidatos.length);
	    _.each(candidatos, function(candidato){
		    assert.ok(candidato.name);
		    assert.ok(candidato.image);
		    assert.ok(candidato.id.length);
	    });

    });
    it('Adoptan posiciones', function() {
	    assert.ok(candidatos.length);
	    _.each(candidatos, function(candidato){
		    assert.ok(Object.keys(candidato.positions).length);
		    _.each(candidato.positions, function(position_taken_by_candidate, id){
		    	assert.ok(_.has(position_taken_by_candidate, 'source'));
		    	assert.ok(_.has(position_taken_by_candidate, 'description'));
		    });
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
describe('La Calculadora', function(){
	it('da un resultado', function(){
		var calc = new Calculadora([2,4]);
		assert.ok(calc.resultado);
	});
	it('entrega un candidato', function(){
		let candidate_positions = Object.keys(candidatos[1].positions);
		candidate_positions = _.map(candidate_positions, function(e){return parseInt(e);})

		var calc = new Calculadora(candidate_positions);
		assert.ok(calc.resultado.candidato.name);
		assert.equal(calc.resultado.percentage, 100);
		_.each(calc.resultado.questions, function(question){
			assert.ok(question.position_id);
			assert.ok(_.has(question, 'description'));
			assert.ok(_.has(question, 'source'));
			assert.ok(question.position_text);
		});
	});
});

describe('la vista inicial', function(){
	it('le trae las preguntas', function(done){
		chai.request(app).get('/').end(function(err, response){
			assert.equal(response.status, 200);
			done();
		});
	});
	it('le calcula la cosa', function(done){
		var to_be_posted = {};
		_.each(questions, function(question){
			to_be_posted["question_" + question.id] = question.positions[_.random()].id;
		});

		chai.request(app).post('/').send(to_be_posted)
		.end(function(err, response){
			assert.equal(response.status, 200);
			done();
		});
	});


});