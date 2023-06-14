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
    const bst = new BinarySearchTree();

  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
