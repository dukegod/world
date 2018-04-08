// 快速排序
// 时间复杂度O(nlogn)
// 基本思想：
// 通过一趟排序将要排序的数据分割成独立的两部分，
// 其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，
// 整个排序过程可以递归进行，以此达到整个数据变成有序序列。
// 基本方案：
// 在数据集之中，选择一个元素作为”基准”（pivot）。
// 所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
// 这个操作称为分区 (partition)操作，分区操作结束后，基准元素所处的位置就是最终排序后它的位置。
// 对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

const genArr = require('./generate-array');

console.log('select sort');
const oldArray = genArr(5);
console.log(oldArray);

function quickSort(params) {
  if (params.length === 0) {
    return [];
  }
  const array = params;
  const len = array.length;
  const arrayLeft = [];
  const arrayRight = [];
  const pivot = array[0];

  for (let i = 0; i< len; i++) {
    if (array[i] > pivot) {
      arrayRight.push(array[i]);
    } else {
      arrayLeft.push(array[i]);
    }
  }
  return quickSort(arrayLeft).concat(pivot, quickSort(arrayRight))
}

const newArray = quickSort(oldArray);
console.log(newArray);

