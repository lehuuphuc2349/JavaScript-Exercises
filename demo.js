const demo = {
  name: "Le Huu Phuc",
  age: 21,
};
var demo1 = JSON.stringify(demo);
console.log(demo1);
var demo2 = JSON.parse(demo1);
console.log(demo2);
console.log(`This is a string "error",'error'`);

const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: "foo",
    },
    {
      id: 2,
      name: "bar",
    },
  ],
};
const root = {
  leftChild: {
    leftChild: {
      leftChild: null,
      rightChild: null,
      data: 42,
    },
    rightChild: {
      leftChild: null,
      rightChild: null,
      data: 5,
    },
  },
  rightChild: {
    leftChild: {
      leftChild: null,
      rightChild: null,
      data: 6,
    },
    rightChild: {
      leftChild: null,
      rightChild: null,
      data: 7,
    },
  },
};
function getLeaf(node) {
  if (node.leftChild) {
    return getLeaf(node.leftChild);
  } else if (node.rightChild) {
    return getLeaf(node.rightChild);
  } else {
    // node must be a leaf node
    return node;
  }
}

console.log(getLeaf(root).data);
console.log(data.items[0].name);
console.log(data["items"][1]["name"]);
console.dir(demo1);
