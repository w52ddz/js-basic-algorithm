// 交换数组元素
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * 生成随机数组
 * @param {生成的数组长度} len 
 * @param {幂数，决定生成的数字范围} power 
 */
function getRandomArray(len = 10, power = 1) {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr[i] = Math.floor(Math.random() * Math.pow(10, power))
  }
  return arr
}

module.exports = {
  swap,
  getRandomArray,
}