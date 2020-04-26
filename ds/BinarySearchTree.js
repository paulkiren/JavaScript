function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


// insert new value to the tree
//                  50
//            30           60
//         20    45     55     70
//      10     35         58      105

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } else {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

BST.prototype.contains = function (value) {
    if(this.value === value) return true;

    if(value< this.value) {
        if(!this.left) return false;
        else return this.left.contains(value);
    }
    else {
        if(!this.right) return false;
        else return this.right.contains(value);

    }

}
const bTree = new BST(50);
bTree.insert(30);
bTree.insert(60);
bTree.insert(45);
bTree.insert(35);
bTree.insert(20);
bTree.insert(10);


console.log(bTree.contains(10));