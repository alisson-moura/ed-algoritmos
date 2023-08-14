import { describe, it, expect, beforeEach } from 'vitest'
import { Deque } from '../../../src/data-structures/02-queue/deque'

describe('Deque', () => {
    let deque: Deque<number>;

    beforeEach(() => {
        deque = new Deque();
    });

    it('should add elements to the front correctly', () => {
        deque.addFront(10);
        deque.addFront(20);

        expect(deque.size).toBe(2);
        expect(deque.front).toBe(20);
    });

    it('should add elements to the back correctly', () => {
        deque.addBack(10);
        deque.addBack(20);

        expect(deque.size).toBe(2);
        expect(deque.back).toBe(20);
    });

    it('should remove elements from the front correctly', () => {
        deque.addBack(10);
        deque.addBack(20);

        const removedElement = deque.removeFront();
        expect(removedElement).toBe(10);
        expect(deque.size).toBe(1);
    });

    it('should remove elements from the back correctly', () => {
        deque.addBack(10);
        deque.addBack(20);

        const removedElement = deque.removeBack();
        expect(removedElement).toBe(20);
        expect(deque.size).toBe(1);
    });

    it('should return the front element without removing it', () => {
        deque.addBack(10);
        deque.addBack(20);

        const frontElement = deque.front;
        expect(frontElement).toBe(10);
        expect(deque.size).toBe(2);
    });

    it('should return the back element without removing it', () => {
        deque.addBack(10);
        deque.addBack(20);

        const backElement = deque.back;
        expect(backElement).toBe(20);
        expect(deque.size).toBe(2);
    });

    it('should correctly check if the deque is empty', () => {
        expect(deque.isEmpty).toBe(true);

        deque.addBack(10);
        expect(deque.isEmpty).toBe(false);

        deque.removeFront();
        expect(deque.isEmpty).toBe(true);
    });

    it('should clear the deque correctly', () => {
        deque.addBack(10);
        deque.addBack(20);

        deque.clear();
        expect(deque.isEmpty).toBe(true);
    });

    it('should convert the deque to a string correctly', () => {
        deque.addBack(10);
        deque.addBack(20);
        deque.addBack(30);

        expect(deque.toString()).toBe('10-20-30');
    });

    it('should handle adding and removing elements from both ends correctly', () => {
        deque.addFront(10);
        deque.addBack(20);
        deque.addBack(30);

        expect(deque.size).toBe(3);

        const removedFront = deque.removeFront();
        expect(removedFront).toBe(10);
        expect(deque.size).toBe(2);

        const removedBack = deque.removeBack();
        expect(removedBack).toBe(30);
        expect(deque.size).toBe(1);
    });

    it('should correctly handle removing from an empty deque', () => {
        const removedFront = deque.removeFront();
        expect(removedFront).toBe(null);

        const removedBack = deque.removeBack();
        expect(removedBack).toBe(null);
    });

    it('should correctly convert an empty deque to string', () => {
        expect(deque.toString()).toBe('');
    });
});
