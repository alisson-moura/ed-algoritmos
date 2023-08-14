import { decimalToBinary } from "../../../src/data-structures/01-stack/problems/decimal-to-binary";
import { describe, test, expect } from 'vitest'

describe('Decimal to binary with Stack', () => {
  test('should return a correct binary value', () => {
    const result = decimalToBinary(10)
    expect(result).toEqual('1010')
  });
})