function HashTable(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
}


function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function (key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
        total += key.charCodeAt(index)
    }

    return total % this.numBuckets;
}
//hash table [, , , (LL), , ,(LL)]
HashTable.prototype.insert = function (key, value) {

    const index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else {
        var currentNode = this.buckets[index];
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }

}

let HST = new HashTable(30);
HST.insert('kiren', 'kiren@abc.com');
HST.insert('Linson', 'alfred@linson.com');
HST.insert('Paul', 'paul@gmail.com');

console.log(HST.buckets);