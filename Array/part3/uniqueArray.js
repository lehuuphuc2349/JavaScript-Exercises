const uniqueArray = (array1, array2) => {
  let result = new Array();
  result = array1.concat.apply(array1, array2);
  return result.filter(
    (value, index, array) => array.indexOf(array[index], index + 1, []) === -1
  );
};
console.log(uniqueArray([1, 2, 3], [4, [5], 6, 1]));
console.log(uniqueArray([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

function diff(arr1, arr2) {
  var a1 = flatten(arr1, true);
  var a2 = flatten(arr2, true);
  var a = [],
    diff = [];
  for (var i = 0; i < a1.length; i++) {
    a[a1[i]] = false;
  }
  for (var i = 0; i < a2.length; i++) {
    if (a[a2[i]] === true) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }
  for (var k in a) diff.push(k);
  return diff;
}
var flatten = function (a, shallow, r) {
  if (!r) {
    r = [];
  }
  if (shallow) {
    return r.concat.apply(r, a);
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      flatten(a[i], shallow, r);
    } else {
      r.push(r, a);
    }
  }
  return r;
};
console.log(diff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
