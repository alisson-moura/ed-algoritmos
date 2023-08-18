export class Node<T> {
    #element: T
    #next: Node<T> | undefined

    constructor(element: T) {
        this.#element = element
        this.#next = undefined
    }

    get element(): T {
        return this.#element
    }

    set next(node: Node<T>) {
        this.#next = node
    }

    get next(): Node<T> | undefined {
        return this.#next
    }
}