import { Stack } from "../stack";

export function decimalToBinary(value: number): string {
    const stack = new Stack()
    let currentValue = Math.floor(value)
    let binary = ''

    while (currentValue > 0) {
        const binary = Math.floor(currentValue % 2)
        currentValue = Math.floor(currentValue / 2)
        stack.push(binary)
    }

    while(!stack.isEmpty()) {
        binary += stack.pop()?.toString()
    }
    return binary
}