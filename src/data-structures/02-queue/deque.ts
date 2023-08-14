export class Deque<T> {
    #count: number
    #lowestCount: number
    #items: Record<number, T>

    constructor() {
        this.#count = 0
        this.#lowestCount = 0
        this.#items = {}
    }

    get isEmpty(): boolean {
        return this.#count === this.#lowestCount
    }

    get size(): number {
        return this.#count - this.#lowestCount
    }

    clear(): void {
        this.#items = {}
        this.#lowestCount = 0
        this.#count = 0
    }

    toString(): string {
        if (this.isEmpty) {
            return ''
        }

        let objString = `${this.#items[this.#lowestCount]}`

        for (let i = this.#lowestCount + 1; i < this.#count; i++) {
            objString = objString + `-${this.#items[i]}`
        }

        return objString
    }

    addFront(element: T): void {
        if (this.isEmpty) {
            this.addBack(element)
            return

        } else if (this.#lowestCount > 0) {
            this.#lowestCount--;
            this.#items[this.#lowestCount] = element
        } else {
            for (let i = this.size; i > this.#lowestCount; i--) {
                this.#items[i] = this.#items[i - 1]
            }
            this.#items[this.#lowestCount] = element
        }
        this.#count++
    }

    public addBack(element: T) {
        this.#items[this.#count] = element
        this.#count++
    }

    public removeFront(): T | null {
        if (this.isEmpty) {
            return null
        }

        const element = this.#items[this.#lowestCount]
        delete this.#items[this.#lowestCount]
        this.#lowestCount++
        return element
    }

    public removeBack(): T | null {
        if (this.isEmpty) {
            return null
        }

        this.#count--;
        const element = this.#items[this.#count]
        delete this.#items[this.#count]
        return element
    }

    get front(): T | null {
        if (this.isEmpty) {
            return null
        }
        return this.#items[this.#lowestCount]
    }


    get back(): T | null {
        if (this.isEmpty) {
            return null
        }
        return this.#items[this.#count - 1]
    }
}