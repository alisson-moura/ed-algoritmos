export class Queue {
    #count: number
    #lowestCount: number
    #items: Record<number, any>

    constructor() {
        this.#count = 0
        this.#lowestCount = 0
        this.#items = {}
    }

    public enqueue(element: any) {
        this.#items[this.#count] = element
        this.#count++
    }

    public dequeue(): any | null {
        if (this.isEmpty) {
            return null
        }

        const element = this.#items[this.#lowestCount]
        delete this.#items[this.#lowestCount]
        this.#lowestCount++
        return element
    }

    public clear(): void {
        this.#count = 0
        this.#lowestCount = 0
        this.#items = {}
    }

    public toString(): string {
        if (this.isEmpty)
            return ''

        let objString = `${this.front}`
        for (let i = this.#lowestCount + 1; i < this.#count; i++) {
            objString = `${objString}-${this.#items[i]}`
        }

        return objString
    }

    get front(): any | null {
        if (this.isEmpty) {
            return null
        }
        return this.#items[this.#lowestCount]
    }

    get isEmpty(): boolean {
        return this.size === 0
    }

    get size(): number {
        return this.#count - this.#lowestCount
    }
}