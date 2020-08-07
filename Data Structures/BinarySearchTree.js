// There are diff Binary/Trees, but the B. SEARCH T. is the only sorted one
// // bc of this sorted property of BST's we can always search for a certain node by looking left or right down the tree
// With all Binary Trees, left node will always be less than its root or parent node and right node (child) will always be greater
// If above is not true, the structure does not qualify as a Binary Tree  
// properties: Root, Parent, Node, Child, Leaf (a node w/no children)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this. right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
// }

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree);

// INSERTING a new node
// // begin at the root, if there is one, check if larger or smaller, go to left or right depending, and repeat this procedure until spot is found
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        // check if there is a root already, if not, val becomes root:
        if(this.root === null) {
            this.root = newNode;
            // and return node:
            return this;
        }
        // otherwise, check if there is a root already, then we check if val is less/greater than it
        // then we have to check if there is a node already on the left or right of the root (depending on the comparison); this process repeats until we find a node with an available side, so we use looping
        else {  
            // we will start at the root and update the 'current' as we loop:
            var current = this.root;
            // check for duplicates though, otherwise we will hit an infinite loop:
            if(val = current.val) return undefined;
            while(true) {
                // if val is less than current (root), we know it'll go on the left somewhere:
                if(val < current.val) {
                    // but we have to check first if there is already a current.left, so first check if it is vacant:
                    if(current.left === null) {
                        // if there is no left node, we insert our val:
                        current.left = newNode;
                        return this;
                    }
                    // but if there is already a current.left, we have to move our current  current.left to be the next current.left:
                    else {
                        current = current.left;
                    }
                }
                // do the same as above for the right side, aka. if val is greater than root etc.
                else if (val > current.val) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }

        }
    }
// less explicit equivalent of above:
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

// FIND method:
    find(val) {
        if(this.root === null) return false;
        var current = this.root, 
            found = false;
        while(current && !found) {
            if(val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined; 
        // or false;
        return current;
    }
// find equivalent, but just outputting true or false:
    contains(val) {
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(val < current.val) {
                current = current.left;
            } else if(val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}