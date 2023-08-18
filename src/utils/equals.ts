import { Node } from "../data-structures/models/linked-list"

export type Equals = (a: any, b: any) => boolean

export const equals: Equals = (a: number, b: number): boolean => {
    return a === b
}

