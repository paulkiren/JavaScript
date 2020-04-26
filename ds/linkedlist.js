function LinkedList() {
    this.head = null;
    this.tail = null;

}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.deleteHead = function () {
    if (!this.head) return null;
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

LinkedList.prototype.deleteTail = function () {
    if (!this.tail) return null;
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;

}

const LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
LL.addToTail(80);
LL.addToTail(60);
// LL.deleteHead();
LL.deleteHead();
LL.deleteTail();

console.log(LL);