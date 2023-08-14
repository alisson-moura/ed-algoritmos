/**
 * Pilha (Stack) é uma estrutura de dados que segue o princípio "Last-In-First-Out" (LIFO), 
 * ou seja, o último elemento adicionado a uma pilha é o primeiro a ser removido. 
 * Imagine uma pilha física de pratos. Você sempre coloca um novo prato no topo da pilha e, quando retira um prato, 
 * pega o que está no topo. Essa mesma lógica é aplicada nas pilhas de dados.
 * Uma pilha é geralmente utilizada para armazenar elementos em que a ordem de adição é relevante 
 * e em que você precisa acessar o elemento mais recente primeiro
 */

type Item = any
export class StackArray {
    private items: Array<Item>

    constructor() {
        this.items = []
    }

    public push(item: Item): void {
        this.items.push(item)
    }

    public pop(): Item | null {
        if (this.isEmpty()) {
            return null
        }
        return this.items.pop()
    }

    public isEmpty(): boolean {
        return this.items.length === 0
    }

    public peek(): Item | null {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1]
    }

    public size(): number {
        return this.items.length
    }

    public clear(): void {
        this.items = []
    }
}