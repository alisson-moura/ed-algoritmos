import { describe, test, expect, beforeEach } from 'vitest'
import { Queue } from "../../../src/data-structures/queue/queue";

describe('Queue', () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should enqueue elements correctly', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.size).toBe(3);
    });

    test('should dequeue elements correctly', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        const firstElement = queue.dequeue();
        expect(firstElement).toBe(10);
        expect(queue.size).toBe(2);
    });

    test('should return the front element of the queue without removing it', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        const firstElement = queue.front;
        expect(firstElement).toBe(10);
        expect(queue.size).toBe(3);
    });

    test('should correctly check if the queue is empty', () => {
        expect(queue.isEmpty).toBe(true);

        queue.enqueue(10);
        expect(queue.isEmpty).toBe(false);

        queue.dequeue();
        expect(queue.isEmpty).toBe(true);
    });

    test('should clear the queue correctly', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        queue.clear();
        expect(queue.isEmpty).toBe(true);
    });

    test('should convert the queue to a string correctly', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.toString()).toBe('10-20-30');
    });
});
