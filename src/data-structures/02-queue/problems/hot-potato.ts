/** 
Você foi desafiado a implementar um jogo de "batata quente" usando uma estrutura de dados de fila. O jogo de batata quente é um jogo onde os jogadores formam um círculo e passam um objeto (a "batata quente") para o jogador ao lado deles antes que o tempo acabe. Quando o tempo acaba, o jogador que estiver segurando a batata quente é eliminado. O jogo continua até que reste apenas um jogador.

Sua tarefa é criar um programa que simule esse jogo de batata quente usando uma fila. Você pode implementar uma classe BatataQuenteGame que possui métodos para adicionar jogadores à fila, passar a batata quente para o próximo jogador e eliminar jogadores quando o tempo acaba.

Aqui estão as funcionalidades que o programa deve suportar:

Criar um novo jogo de batata quente.
Adicionar jogadores à fila do jogo.
Passar a batata quente para o próximo jogador na fila.
Eliminar o jogador atual que estiver segurando a batata quente.
Repetir os passos 3 e 4 até que reste apenas um jogador na fila, que é o vencedor.
Você pode criar a estrutura de fila do zero ou utilizar uma implementação de fila já existente.

Dica: Use uma fila circular para simular o círculo de jogadores.
 */

import { Queue } from "../queue";

export function hotPotato(players: string[]) {
    const queue = new Queue()
    const elimitatedList: number[] = []


    // adiciona jogadores na fila
    for (let i = 0; i < players.length; i++)
        queue.enqueue(players[i])


    // verifica quantos jogadores tem no jogo
    while (queue.size > 1) {
        const random = Math.floor(Math.random() * 10)
    
        // faz a fila se "mover" em circulo
        for (let i = 0; i < random; i++){
            console.log(queue.toString())
            queue.enqueue(queue.dequeue())
        }
            

        // adiciona jogar na lista de eliminados
        elimitatedList.push(queue.dequeue())
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

/*
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
    const result = hotPotato(names)

    result.eliminated.forEach(name => console.log(`${name} was eliminated from the Hot Potato Game.`))
    console.log(`The Winner is: ${result.winner}`)
*/