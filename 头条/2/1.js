const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lineCount = 1,
    totalUser = 0,
    userLikeArr = {},
    groupLength = 0
rl.on('line', function (line) {
    if (lineCount == 1) {
        totalUser = parseInt(line)
        lineCount++
    } else if (lineCount == 2) {
        var totalArr = line.split(' ')
        totalArr.forEach((value, index) => {
            // 缩短遍历长度
            if (userLikeArr[value]) {
                userLikeArr[value].push(index + 1)
            } else {
                userLikeArr[value] = [index + 1]
            }
        })
        lineCount++
    } else if (lineCount == 3) {
        groupLength = parseInt(line)
        lineCount++
    } else {
        let searchLine = line.split(' ')
        let start = parseInt(searchLine[0]) ,
            end = parseInt(searchLine[1]) ,
            targetValue = parseInt(searchLine[2]) 
        let count = 0
        // 过滤不必要遍历
        if (userLikeArr[targetValue]) {
            userLikeArr[targetValue].forEach((index) => {
                if (index <= end && index >= start) {
                    count++
                }
            })
        }
        console.log(count)
        lineCount++
        groupLength--
        groupLength == 0 && process.exit(0)
    }
})