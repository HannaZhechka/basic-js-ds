const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
constructor() {
  this.rootNode = null;
}
  root(){
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(node.data > data) {
        node.left = addNode(node.left, data);
        return node;
      }
      node.right = addNode(node.right, data);
      return node;
    }
  }
has(data) {
  return hasNode(this.rootNode, data);

  function hasNode(node, data) {
    if(!node) {
      return false;
    }
    if(node.data === data) {
      return true;
    }
    if(node.data > data) {
      return hasNode(node.left, data);
    }
    return hasNode(node.right, data);
  }
}

find(data) {
  return findNode(this.rootNode, data);

  function findNode(node, data) {
    if(!node) {
      return null;
    }
    if(node.data === data) {
      return node;
    }
    if(node.data > data) {
      return findNode(node.left, data);
    }
    return findNode(node.right, data);
  }
}

remove(data) {
  this.rootNode = removeNode(this.rootNode, data);

  function removeNode(node, data) {
    //еслти нет узла,т.е. null, то null и оставляем
    if (!node){
      return null;
    }
    //если искомое значение меньше, чем значение в текущем узле
    if (data < node.data) {
      node.left = removeNode(node.left, data); //обновили поддерево
      return node; // вернули поддерево
      
    } else if (data > node.data) {
      node.right = removeNode(node.right, data);
      return node;
      //если искомое значение = значению в текущем узле
    } else {
      //если отсутствуют оба потомка
      if (!node.left && !node.right){
        return null;
      } 
      //нет левого потомка
      if (!node.left){
        return node.right;} 
      //нет правого потомка
      if (!node.right){
        return node.left;} 
      //есть оба потомка
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }
}
min(){
  if (!this.rootNode){
    return;
  }
  let node=this.rootNode;
  while (node.left){
    node=node.left;
  }
  return node.data;
} 
max(){
  if (!this.rootNode){
    return 
  }
  let node=this.rootNode;
  while (node.right){
    node=node.right;
  }
  return node.data;
} 
}

module.exports = {
  BinarySearchTree
};