function Find(target, array)
{
    if (!array.length) return false
    let row = array.length
        col = array[0].length
    for(let i = 0;i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(array[i][j] == target){
                return true
            } else if(array[i][j] < target) continue
        }
        // if(array[i].indexOf(target) > -1) return true 第二个for可替换这句
    }
    return false
}

let arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
console.log(Find(5,arr)) 
console.log(Find(7,arr)) 