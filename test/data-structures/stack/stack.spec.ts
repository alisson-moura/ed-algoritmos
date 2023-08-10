import { Stack } from "../../../src/data-structures/stack/stack";
import { describe, test, beforeEach, expect } from 'vitest'

describe('Stack with object', () => {
  let stack: Stack

  beforeEach(() => {
    stack = new Stack();
  });

  test('should create an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('should add elements to the stack', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should peek the top element of the stack', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2);
  });

  test('should remove elements from the stack', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.size()).toBe(0);
  });

  test('should return null when popping from an empty stack', () => {
    expect(stack.pop()).toBeNull();
  });

  test('should return an string', () => {
    stack.push(5)
    stack.push(3)

    expect(stack.toString()).toEqual(`${3}\n${5}`)
  });

  test('should clear the stack', () => {
    stack.push(10);
    stack.push(20);

    stack.clear();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
})