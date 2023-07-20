import { LinkedList } from '@/src/dsa/LinkedList';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('add', () => {
    it('should add a value to an empty linked list', () => {
      linkedList.add(1);
      expect(linkedList.toArray()).toEqual([1]);
    });

    it('should add values to a non-empty linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('remove', () => {
    it('should remove a value from the head of the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.remove(1);
      expect(linkedList.toArray()).toEqual([2, 3]);
    });

    it('should remove a value from the middle of the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.remove(2);
      expect(linkedList.toArray()).toEqual([1, 3]);
    });

    it('should remove a value from the tail of the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.remove(3);
      expect(linkedList.toArray()).toEqual([1, 2]);
    });

    it('should do nothing if the linked list is empty', () => {
      linkedList.remove(1);
      expect(linkedList.toArray()).toEqual([]);
    });

    it('should do nothing if the value does not exist in the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.remove(4);
      expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('has', () => {
    it('should return true if the value exists in the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.has(2)).toBe(true);
    });

    it('should return false if the value does not exist in the linked list', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.has(4)).toBe(false);
    });

    it('should return false if the linked list is empty', () => {
      expect(linkedList.has(1)).toBe(false);
    });
  });

  describe('iterator', () => {
    it('should iterate over the linked list values', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);

      const values = [];
      for (const value of linkedList) {
        values.push(value);
      }

      expect(values).toEqual([1, 2, 3]);
    });

    it('should return an empty iterator if the linked list is empty', () => {
      const iterator = linkedList[Symbol.iterator]();
      expect(iterator.next().done).toBe(true);
    });
  });

  describe('toArray', () => {
    it('should convert the linked list to an array', () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });

    it('should return an empty array if the linked list is empty', () => {
      expect(linkedList.toArray()).toEqual([]);
    });
  });
});
