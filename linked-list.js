class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    insert(value) {
        this.length++;
        let newNode = new Node(value);
        if(this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;
    }

    print() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
    }

    removeLast() {
        if(this.tail) {
            this.length--;
            const tailNode = this.tail;
            //search for the node before tail;
            let currentNode = this.head;

            // The while loop stops when the node next to tail node is found
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }

            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }

    insertHead(value) {
        this.length++;
        let newNode = new Node(value);
      
        if (this.head) {
          newNode.next = this.head;
          this.head = newNode;
          return newNode;
        }
      
        this.head = this.tail = newNode;
        return newNode;
    }

    removeHead() {
        if(this.head) {
            this.length--;
            const removeHead = this.head;
            this.head = this.head.next;
            return removeHead;
        }
        return undefined;
    }

    insertIndex(value, index) {
        if(index >= this.length) {
            throw new Error('Insert index out of bounds')
        }
        if(index === 0) {
            return this.insertHead(value);
        }
        //to find where to insert we need to know 1) node at provided index. 2) previous node.
        let previousNode = null;
        let currentNode = this.head;

        for(let i=0; i<index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        const newNode = new Node(value);
        newNode.next = currentNode;
        previousNode.next = newNode;
        this.length ++;
        return newNode;
    }   

    removeIndex(index) {
        if(index > this.length) {
            throw new Error('cant find index to remove');
        }

        if(index === 0) {
            this.removeHead();
        }

        let previousNode = null;
        let currentNode = null;
        for(let i=0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
}


const list = new LinkedList();
console.log(list);