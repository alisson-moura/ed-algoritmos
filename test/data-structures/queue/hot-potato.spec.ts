import { describe, it, expect, vi } from 'vitest'
import { hotPotato } from '../../../src/data-structures/02-queue/problems/hot-potato';

const mockRandom = vi.spyOn(Math, 'random')
mockRandom.mockReturnValue(0.5)

describe('hotPotato', () => {
    it('should return the winner and eliminated players correctly', () => {
        const players = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
        const result = hotPotato(players);

        expect(result.eliminated).toContain('Alice');
        expect(result.eliminated).toContain('Bob');
        expect(result.eliminated).toContain('Charlie');
        expect(result.eliminated).toContain('Eve');
        expect(result.winner).toBe('David');
    });

    it('should return the winner correctly for a single player', () => {
        const players = ['Alice'];
        const result = hotPotato(players);

        expect(result.eliminated).toEqual([]);
        expect(result.winner).toBe('Alice');
    });
});
