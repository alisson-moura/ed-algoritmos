import { Equals, equals } from "../../utils/equals";
import { DoublyNode } from "../models/linked-list";
import { LinkedList } from "./linked-list";

export class DoublyLinkedList<T> extends LinkedList<T> {
    #tail: DoublyNode<T> | undefined

    constructor(equalsfn: Equals = equals) {
        super(equals)
        this.#tail = undefined
    }

    push(element: T): void {
        const node = new DoublyNode<T>(element)

        if (this.isEmpty) {
            this.head = node
            this.#tail = node
        } else {
            const lastItem = this.#tail
            if (lastItem) {
                this.#tail = node
                node.prev = lastItem
                lastItem.next = node
            }
        }
        this.increment()
    }

    insert(element: T, index: number) {
        const node = new DoublyNode<T>(element)

        if (index === 0 && this.head) {
            const current = this.head as DoublyNode<T>
            current.prev = node
            node.next = current
            this.head = node
            this.increment()
        } else {
            const current = this.getElementAt(index) as DoublyNode<T>
            if (current) {
                if (current.prev?.next)
                    current.prev.next = node

                node.prev = current.prev
                node.next = current
                current.prev = node

                this.increment()
            }
        }
        return
    }

    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this.size) {
            let current = this.head as DoublyNode<T> | undefined

            if (index === 0) {
                if (this.head) {
                    this.head = current?.next as DoublyNode<T>
                    const head = this.head as DoublyNode<T>
                    head.prev = undefined
                    
                    if (this.size === 1) {
                        this.tail = undefined
                    }
                }
            } else if (index === this.size - 1) {
                current = this.#tail
                this.tail = current?.prev
                if (this.tail) {
                    this.tail.next = undefined
                }

            } else {
                current = this.getElementAt(index) as DoublyNode<T>
                if (current) {
                    const previous = current.prev
                    const next = current.next as DoublyNode<T>
                    if (previous) {
                        previous.next = next
                    }

                    if (next) {
                        next.prev = previous
                    }
                }
            }

            this.decrement()
            return current?.element
        }
        return undefined
    }

    set tail(node: DoublyNode<T> | undefined) {
        this.#tail = node
    }

    get tail(): DoublyNode<T> | undefined {
        return this.#tail
    }

    toString(): string {
        let objString = ''

        if (this.head == null) {
            return objString
        }

        let current = this.head as DoublyNode<T>
        objString = `${current.element}`

        while (current.next !== undefined) {
            current = current.next as DoublyNode<T>
            objString += ` <-> ${current.element}`
        }

        objString += ` -> undefined`

        return objString
    }
}