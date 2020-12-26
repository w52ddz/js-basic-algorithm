const { swap, getRandomArray } = require('../utils/index')

// 选择排序
function selectionSort(array) {
  const len = array.length
  // 循环列表，和后面的元素对比，这里len可以写成len - 1
  // 因为len - 1是最后一个元素的索引，i == len - 1时内层循环执行无意义
  for (let i = 0; i < len; i++) {
    // 定义最小值的索引，默认为i
    let minIndex = i
    for (let j = i; j < len; j++) {
      // 比较
      if (array[j] < array[minIndex]) {
        // 更新最小值索引
        minIndex = j
      }
    }
    // 交换元素
    swap(array, i, minIndex)
  }
}

// 测试
const list = getRandomArray()
console.log('排序前', list)
selectionSort(list)
console.log('排序后', list)
