export class Node<T> {
    #element: T
    #next: Node<T> | undefined
 
    constructor(element: T, next: Node<T> | undefined = undefined) {
        this.#element = element
        this.#next = next
    }

    get element(): T {
        return this.#element
    }

    set next(node: Node<T> | undefined) {
        this.#next = node
    }

    get next(): Node<T> | undefined {
        return this.#next
    }
}

export class DoublyNode<T> extends Node<T> {
    #prev: DoublyNode<T> | undefined

    constructor(element: T) {
        super(element)
        this.#prev = undefined
    }

    get prev(): DoublyNode<T> | undefined {
        return this.#prev
    }

    set prev(node: DoublyNode<T> | undefined) {
        this.#prev = node
    }
}