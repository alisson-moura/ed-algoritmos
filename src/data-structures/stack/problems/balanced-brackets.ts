import { Stack } from "../stack"

/**
 * Link para a descrição do problema: https://www.hackerrank.com/challenges/ctci-balanced-brackets/problem
 */
export function balancedBrackets(s: string): string {
    const stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        let bracket = s[i]

        if (isStartingBracket(bracket)) {
            stack.push(bracket)
        } else {
            const startingBracket = stack.pop() as string
            if (!isPair(startingBracket, bracket)) {
                return 'NO'
            }
        }
    }

   return stack.isEmpty() ? 'YES' : 'NO'
}

function isPair(v1?: string, v2?: string): boolean {
    switch (v1) {
        case '{':
            return v2 === '}'
        case '[':
            return v2 === ']'
        case '(':
            return v2 === ')'

        default:
            return false
    }
}

function isStartingBracket(bracket: string): boolean {
    return bracket === '{' || bracket === '[' || bracket === '('
}