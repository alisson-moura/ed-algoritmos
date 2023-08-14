import { Deque } from "../deque"

export function palindromeChecker(value: string): boolean {
    let isPalindrome = true

    const valueformatted = value.toLowerCase().replace(/,/g, '').split(' ').join('')
    if (valueformatted.length == 0) {
        return false
    }

    const deque = new Deque<string>()
    for (let i = 0; i < valueformatted.length; i++)
        deque.addBack(valueformatted[i])

    while (deque.size > 1 && isPalindrome) {
        const frontElement = deque.removeFront()
        const backElement = deque.removeBack()

        if (frontElement !== backElement)
            isPalindrome = false
    }

    return isPalindrome
}
