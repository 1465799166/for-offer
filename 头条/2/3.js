
// 二分查找 重复则查最后一个
function halfSearch(arr, target) {
    var left = 0,
        right = arr.length - 1
        targetIndex = -1 
    while(left < right) {
        var mid = Math.ceil(left + right)
        if(arr[mid] > target) {
            right = mid - 1
        } else if (arr[mid] < target) {
            left = mid + 1
        } else if (arr[mid] == target) {
            left = mid + 1
            targetIndex = mid
        }
    }
    if(arr[left] == target) {
        targetIndex = left
    }
    return targetIndex
}
console.log(halfSearch([1,2,3,4,5,5,6,7,8,8,8,8,8,8,9], 8)) 