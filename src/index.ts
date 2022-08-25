import { Pokemon } from './decorators/pokemon';

const charmander = new Pokemon('Charmander')
// Pokemon.prototype.customName = 'Pikachu'
console.log(charmander)
charmander.savePokemonToDB(500)
