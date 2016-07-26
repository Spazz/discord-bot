var Pokedex = require('pokedex-promise-v2');

var Poke = new Pokedex();

var pokemon = {
	getId: function(name) {
		Poke.getPokemonByName(name)
			.then(function(res) {
				return res.id;
			})
			.catch(function(err) {
				console.error("There was an error ", err);
				return;
			})	
	},
	evolution: function(name) {
		var id = this.getId(name);
		console.log(id);
		/*Poke.getEvolutionChainById(id)
			.then(function(res) {
				console.log(res);
			})
			.catch(function(err) {
				console.error("There was an error ", err);
			})*/
	}
}

pokemon.evolution("butterfree");