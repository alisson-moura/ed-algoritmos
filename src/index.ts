import { hotPotato } from "./data-structures/02-queue/problems/hot-potato"

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names)

result.eliminated.forEach(name => console.log(`${name} was eliminated from the Hot Potato Game.`))
console.log(`The Winner is: ${result.winner}`)