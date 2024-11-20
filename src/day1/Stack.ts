type Node<T> = {
   value: T;
   prev?: Node<T>;
}


export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
      this.head = undefined;
      this.length = 0;
    }

    push(item: T): void {
      const node = {value: item} as Node<T>;
      if (!this.head) {
        this.head = node;
        this.length += 1;
        return;
      }
      node.prev = this.head;
      this.head = node;
      this.length += 1;    
    }
    pop(): T | undefined {
      if (!this.head) {
        return undefined;
      }
      const node = this.head
      this.head = node.prev;
      this.length -= 1;
      return node.value;

    }
    peek(): T | undefined {
      if (!this.head) {
        return undefined;
      }
      return this.head.value;
    }
}
