function LinkedList() {
    this.head = null;
    this.tail = null;

}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead=function(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

const LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
console.log(LL);