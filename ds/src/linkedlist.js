class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

    }
    addToHead(value) {
        const newNode = new Node(value, this.head, null);
        if (this.head)
            this.head.prev = newNode;
        else
            this.tail = newNode;
        this.head = newNode;
    }
    addToTail(value) {
        const newNode = new Node(value, null, this.tail);
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
    }
    deleteHead() {
        if (!this.head)
            return null;
        const val = this.head.value;
        this.head = this.head.next;
        if (this.head)
            this.head.prev = null;
        else
            this.tail = null;
        return val;
    }
    deleteTail() {
        if (!this.tail)
            return null;
        const val = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail)
            this.tail.next = null;
        else
            this.head = null;
        return val;
    }
    search(searchValue) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === searchValue)
                return currentNode.value;
            currentNode = currentNode.next;
        }

    }
    // Assignment Index Of
    // list 3 40 3 7
    // indexOf(3) >  0, 2
    indexOf(value) {
        let output = [], index = 0, currentNode = this.head;
        while (currentNode) {

            if (currentNode.value === value)
                output.push(index);
            index++;
            currentNode = currentNode.next;
        }
        return output;
    }
}
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}






exports ;
// Big O notations
const LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
LL.addToHead(400);
LL.addToTail(80);
LL.addToTail(60);
// LL.deleteHead();
// LL.deleteHead();
// LL.deleteTail();
console.log(LL.indexOf(400));

// console.log(LL);