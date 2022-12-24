let singleLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: {
              value: 3,
              next: null
            }
          }
        }
      }
    }
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
}

let myLinkedList = new MyDoublyLinkedList(1);

console.log(myLinkedList.append(1));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
// console.log(myLinkedList.prepend(0));
