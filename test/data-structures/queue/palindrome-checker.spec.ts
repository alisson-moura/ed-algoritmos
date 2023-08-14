import { describe, it, expect, vi } from 'vitest'
import { palindromeChecker } from '../../../src/data-structures/02-queue/problems/palindrome-checker';

describe('palindromeChecker', () => {
    it('should return true for a palindrome word', () => {
        const palindromeWord = 'level';
        expect(palindromeChecker(palindromeWord)).toBe(true);
    });

    it('should return true for a palindrome phrase with spaces', () => {
        const palindromePhrase = 'A man a plan a canal Panama';
        expect(palindromeChecker(palindromePhrase)).toBe(true);
    });

    it('should return false for a non-palindrome word', () => {
        const nonPalindromeWord = 'hello';
        expect(palindromeChecker(nonPalindromeWord)).toBe(false);
    });

    it('should return false for an empty string', () => {
        const emptyString = '';
        expect(palindromeChecker(emptyString)).toBe(false);
    });

    it('should return true for a single-character string', () => {
        const singleCharacter = 'a';
        expect(palindromeChecker(singleCharacter)).toBe(true);
    });

    it('should return true for a palindrome phrase with mixed cases and spaces', () => {
        const mixedCasePalindrome = 'A man, a plan, a canal, Panama';
        expect(palindromeChecker(mixedCasePalindrome)).toBe(true);
    });
});
