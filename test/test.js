var assert = require('assert');
var _ = require('lodash');
var candidatos = require('../candidatos.js');
var questions = require('../questions.js');
var Calculadora = require('../calculator.js');

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
		var calc = new Calculadora([2,4]);
		assert.equals(calc.resultado.candidato.name, 'Fernando Haddad');
		assert.equals(calc.resultado.porcentage, 100);
		assert.equals(calc.resultado.questions, [
			{
			    position_id: 2, 
			    position_text: 'Não',
			    name: 'Você concorda com as alterações realizadas na CLT e defende que a terceirização possa ocorrer em todas as atividades das empresas?',
			    source: 'http://google.com',
			    description: 'Perrito'
			},
		    
		    {
		        position_id: 4, 
		        position_text: 'Não',
		        name: 'Você acredita que os trabalhadores devem contribuir mais tempo do que contribuem hoje para se aposentar?',
		        source: 'http://globo.com',
		        description: 'Gatito'
		    },

			]);

	});
});