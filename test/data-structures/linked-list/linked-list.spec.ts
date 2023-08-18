import { describe,test, expect, beforeEach } from 'vitest'
import { LinkedList } from "../../../src/data-structures/03-linked-list/linked-list";
import { Node } from "../../../src/data-structures/models/linked-list";

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  test('push adds elements at the end', () => {
    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.size).toBe(2);
    expect(linkedList.toString()).toBe('1 -> 2 -> undefined');
  });

  test('insert inserts element at the correct position', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.insert(3, 1);

    expect(linkedList.size).toBe(3);
    expect(linkedList.toString()).toBe('1 -> 3 -> 2 -> undefined');
  });

  // Add more tests for the other class functionalities

  test('getElementAt returns the element at the correct position', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    const node: Node<number> | undefined = linkedList.getElementAt(1);
    expect(node?.element).toBe(2);
  });

  test('indexOf returns the correct index of the element', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    const index: number = linkedList.indexOf(2);
    expect(index).toBe(1);
  });

  // Add more tests for the other class functionalities

  test('removeAt removes the element at the correct position', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    const removedElement: number | undefined = linkedList.removeAt(1);
    expect(removedElement).toBe(2);
    expect(linkedList.size).toBe(2);
    expect(linkedList.toString()).toBe('1 -> 3 -> undefined');
  });

  test('remove removes the correct element', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    const removedElement: number | undefined = linkedList.remove(2);
    expect(removedElement).toBe(2);
    expect(linkedList.size).toBe(2);
    expect(linkedList.toString()).toBe('1 -> 3 -> undefined');
  });

  test('isEmpty checks if the list is empty', () => {
    expect(linkedList.isEmpty).toBe(true);

    linkedList.push(1);
    expect(linkedList.isEmpty).toBe(false);
  });

  test('size returns the correct size of the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.size).toBe(3);
  });

  test('head returns the first element of the list', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.head).toBe(1);
  });

  test('toString converts the list to a string', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.toString()).toBe('1 -> 2 -> 3 -> undefined');
  });
});
