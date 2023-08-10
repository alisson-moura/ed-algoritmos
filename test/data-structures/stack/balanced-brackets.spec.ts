import { describe, test, expect } from 'vitest'
import { balancedBrackets } from '../../../src/data-structures/stack/problems/balanced-brackets';

describe('balancedBrackets', () => {
    test('should return "YES" for a balanced bracket string', () => {
        expect(balancedBrackets('()')).toBe('YES');
        expect(balancedBrackets('{[()]}')).toBe('YES');
        expect(balancedBrackets('[{()}]')).toBe('YES');
        expect(balancedBrackets('{{[[(())]]}}')).toBe('YES');
    });

    test('should return "NO" for an unbalanced bracket string', () => {
        expect(balancedBrackets('(')).toBe('NO');
        expect(balancedBrackets('[}')).toBe('NO');
        expect(balancedBrackets('{[)')).toBe('NO');
        expect(balancedBrackets('{{[[(())]]}}}')).toBe('NO');
    });

    test('should return "YES" for an empty string', () => {
        expect(balancedBrackets('')).toBe('YES');
    });
});
