var slugify = require('slugify');
var data = require('./banco_de_dados.js');
var _ = require('lodash');


function Candidato(obj) {
	this.name = obj.name;
	this.description = obj.description;
	this.image = obj.image;
	this.positions = obj.positions;
	this.id = slugify(this.name);
};

var candidatos = [];
_.each(data.candidatos, function(candidato_data){
	candidatos.push(new Candidato(candidato_data));
});
module.exports = candidatos;
