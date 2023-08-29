import { Equals, equals } from "../../utils/equals"
import { DoublyNode, Node } from "../models/linked-list"

export class LinkedList<T> {
    #count: number
    #head: Node<T> | undefined
    #equalsfn: Equals

    constructor(equalsfn: Equals = equals) {
        this.#count = 0
        this.#head = undefined
        this.#equalsfn = equalsfn
    }

    push(element: T): void {
        const node = new Node<T>(element)
        let current: Node<T>

        if (this.#head == undefined) {
            this.#head = node
        } else {
            current = this.#head
            while (current.next != undefined) {
                current = current.next
            }
            current.next = node
        }
        this.#count++
    }

    insert(element: T, index: number) {
        const node = new Node<T>(element)
        if (index === 0 && this.#head) {
            node.next = this.#head
            this.#head = node
            this.#count++
        } else {
            const previous = this.getElementAt(index - 1)
            if (previous) {
                const current = previous.next as Node<T>
                node.next = current
                previous.next = node
                this.#count++
            }
        }
        return
    }

    getElementAt(index: number): Node<T> | undefined {
        if (index >= 0 && index <= this.#count) {
            let current = this.#head

            for (let i = 0; i < index && current != null; i++) {
                current = current.next
            }

            return current
        }
        return undefined
    }

    indexOf(element: T): number {
        let current = this.#head
        for (let i = 0; i < this.#count && current != null; i++) {
            if (this.#equalsfn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }

    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this.#count) {
            let current = this.#head

            if (index === 0 && current != null) {
                this.#head = current.next
            } else {
                const previous: Node<T> | undefined = this.getElementAt(index - 1)
                if (previous) {
                    current = previous.next
                    previous.next = current?.next as Node<T>
                }
            }
            this.#count--
            return current?.element
        }

        return undefined
    }

    remove(element: T): T | undefined {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    get isEmpty(): boolean {
        return this.size === 0
    }

    get size(): number {
        return this.#count
    }

    get head():  Node<T> | undefined {
        return this.#head
    }

    set head(value: Node<T> | undefined) {
        this.#head = value
    }

    increment() {
        this.#count++
    }

    decrement() {
        this.#count--
    }

    toString(): string {
        let objString = ''

        if (this.#head == null) {
            return objString
        }

        let current = this.#head
        objString = `${current.element}`

        while (current.next !== undefined) {
            current = current.next
            objString += ` -> ${current.element}`
        }

        objString += ` -> undefined`

        return objString
    }
}