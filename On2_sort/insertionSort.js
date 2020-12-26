const { swap, getRandomArray } = require('../utils/index')

// 插入排序
function insertionSort(array) {
  // 数组首元素视为已排序
  for (let i = 1; i < array.length; i++) {
    // 版本1
    /* // j > 0保证前一个元素索引j - 1不越界
    for (let j = i; j > 0; j--) {
      // 和前一个元素做比较，大于则交换
      if (array[j] < array[j - 1]) {
        // 交换元素
        swap(array, j, j - 1)
      } else {
        break
      }
    } */
    // 版本2 对版本1进行优化
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      // 交换元素
      swap(array, j, j - 1)
    }
  }
}

// 测试
const list = getRandomArray()
console.log('排序前', list)
insertionSort(list)
console.log('排序后', list)
