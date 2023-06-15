// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    const bst = new TreeNode(val)
      if(!this.root) {
        this.root = bst
        return
      }
    if(val < currentNode.val) {
      if(!currentNode.left) {
        currentNode.left = bst;
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
        if(!currentNode.right) {
          currentNode.right = bst
        } else {
          this.insert(val, currentNode.right)
        }

      }


  }

  search(val) {
let currentNode = this.root


    while(currentNode) {
     if(currentNode.val === val) {
        return true
     }
     if (val < currentNode.val) {
      currentNode = currentNode.left
     } else if(val > currentNode.val) {
     currentNode = currentNode.right
     }
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
   if(currentNode) {
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right)
   }
  }


  inOrderTraversal(currentNode = this.root) {
   if(currentNode) {
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right)
   }
  }


  postOrderTraversal(currentNode = this.root) {
   if(currentNode) {
     this.postOrderTraversal(currentNode.left);
     this.postOrderTraversal(currentNode.right);
     console.log(currentNode.val)
   }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let currNode = this.root
    let queue = []
    let result = []
     queue.push(currentNode.val);

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
