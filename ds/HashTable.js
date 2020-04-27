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

    return total%this.numBuckets;
}


let HST = new HashTable(30);
console.log(HST.hash("TEST"));