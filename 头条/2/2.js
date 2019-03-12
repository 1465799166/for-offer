// 反思
// 1.for...in遍历，是遍历对象的key
// 2.array.forEach(function(item,index) => {return}) return无法跳出 forEach
// 3.readline得到的是string类型的数据，计算前需parseInt(),否则可能成为字符串计算
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var lineCount = 1,
    totalCount = 0, // 总颗数
    instantlength = 0, // 连续n颗内不能重复
    totalColor = 0, // 总颜色数
    curNum = 1, // 当前在处理第几颗
    colorList = {}
rl.on('line', function (line) {
    if (lineCount == 1) {
        var lineArr = line.split(' ')
        totalCount = parseInt(lineArr[0])
        instantlength = parseInt(lineArr[1])
        totalColor = parseInt(lineArr[2])
        lineCount++
    } else if (lineCount > 1) {
        var lineArr = line.split(' ')
        if (lineArr[0] != 0) {
            var curColorArr = lineArr.slice(1)
            curColorArr.forEach((color) => {
                if (colorList[color]) {
                    colorList[color].push(curNum)
                } else {
                    colorList[color] = [curNum]
                }
            })
        }
        if (curNum == totalCount) {
            var filterCount = 0
            for (let color in colorList) {
                let curColor = colorList[color]
                for (let i = 0; i < curColor.length; i++) {
                    const status1 = !!curColor[i + 1] && (parseInt(curColor[i + 1]) - parseInt(curColor[i]) < instantlength)
                    const status2 = !curColor[i + 1] && (parseInt(curColor[0]) - parseInt(curColor[i]) + totalCount < instantlength)
                    if (status1 || status2) {
                        filterCount++
                        break
                    }
                }
            }
            console.log(filterCount)
            process.exit(0)
        } else {
            curNum++
        }
    }
})