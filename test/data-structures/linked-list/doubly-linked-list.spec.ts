import { describe, it, expect, beforeEach, } from 'vitest'
import { DoublyLinkedList } from '../../../src/data-structures/03-linked-list/doubly-linked-list';


describe('DoublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList<number>;

  beforeEach(() => {
    // Antes de cada teste, crie uma nova instância da DoublyLinkedList
    doublyLinkedList = new DoublyLinkedList<number>();
  });

  it('deve adicionar elementos corretamente com o método push', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    expect(doublyLinkedList.toString()).toEqual('1 <-> 2 <-> 3 -> undefined');
  });

  it('deve inserir elementos corretamente com o método insert', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(3);
    doublyLinkedList.insert(2, 1);

    expect(doublyLinkedList.toString()).toEqual('1 <-> 2 <-> 3 -> undefined');
  });

  it('deve remover elementos corretamente com o método removeAt', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    const removedElement = doublyLinkedList.removeAt(1);

    expect(removedElement).toEqual(2);
    expect(doublyLinkedList.toString()).toEqual('1 <-> 3 -> undefined');
  });

  // Teste para remover elementos no meio da lista
  it('deve remover elementos no meio corretamente com o método removeAt', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    const removedElement = doublyLinkedList.removeAt(1);

    expect(removedElement).toEqual(2);
    expect(doublyLinkedList.toString()).toEqual('1 <-> 3 -> undefined');
  });

  // Teste para remover elementos no final da lista
  it('deve remover elementos no final corretamente com o método removeAt', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    const removedElement = doublyLinkedList.removeAt(2);

    expect(removedElement).toEqual(3);
    expect(doublyLinkedList.toString()).toEqual('1 <-> 2 -> undefined');
  });

  it('deve retornar undefined ao remover um elemento inexistente', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    const removedElement = doublyLinkedList.removeAt(5);

    expect(removedElement).toBeUndefined();
  });

  it('deve retornar o tamanho correto da lista', () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    expect(doublyLinkedList.size).toEqual(3);
  });

  it('deve verificar se a lista está vazia corretamente', () => {
    expect(doublyLinkedList.isEmpty).toBeTruthy();
    doublyLinkedList.push(1);
    expect(doublyLinkedList.isEmpty).toBeFalsy();
  });
});
