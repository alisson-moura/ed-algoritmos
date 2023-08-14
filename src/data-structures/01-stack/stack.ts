export class Stack {
    #count: number
    #items: Record<number, number | string>

    constructor() {
        this.#count = 0
        this.#items = {}
    }

    public push(element: number | string): void {
        this.#items[this.#count] = element
        this.#count++
    }

    public pop(): number | string | null {
        if (this.isEmpty()) {
            return null
        }

        this.#count--;
        const element = this.#items[this.#count]
        delete this.#items[this.#count]
        return element
    }

    public size(): number {
        return this.#count
    }

    public isEmpty(): boolean {
        return this.size() === 0
    }

    public peek(): number | string | null {
        if (this.isEmpty()) {
            return null
        }
        return this.#items[this.#count - 1]
    }

    public clear(): void {
        this.#count = 0
        this.#items = {}
    }

    public toString():string {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this.#items[this.#count - 1]}`
        for(let i = this.size() - 2; i >= 0; i--) {
            objString = `${objString}\n${this.#items[i]}`
        }
        return objString
    }
}