const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lineCount = 1
var n = 0,
    m = 0
var y = []
rl.on('line', function (line) {
    if (lineCount == 1) {
        var lineArr = line.split(' ')
        var n = parseInt(lineArr[0])
        var m = parseInt(lineArr[1])
        y = m.toString(2).split('')
        for (let i = 0; i < y.length % 4; i++) {
            y.unshift('0')
        }
        lineCount++
    } else {
        var lineArr = line.split(' ')
        var a = lineArr.map(item => {
            var tmp = parseInt(item).toString(2).split('')
            for (let i = 0; i < tmp.length % 4; i++) {
                tmp.unshift('0')
            }
            return tmp
        })
        var count = 0
        var yhArr = []
        for (let i = 0; i < a.length - 1; i++) {
            for (let j = i + 1; j < a.length; j++) {
                yhArr.push(yihuo(a[i], a[j]))
            }
        }
        for (let k = 0; k < yhArr.length; k++) {
            if (yhArr[k].length > y.length) {
                count++
            } else if (yhArr[k].length == y.length) {
                for (let z = 0; z < y.length; z++) {
                    if (yhArr[k][z] > y[z]) {
                        count++
                        break;
                    } else if (yhArr[k][z] < y[z]) {
                        break;
                    }
                }
            }

        }

        console.log(count)
        process.exit(0)
    }
})

function yihuo(a, b) {
    var result = []
    a.map((item, index) => {
        if (a[index] == b[index]) {
            result.push('0')
        } else {
            result.push('1')
        }
    })
    return result
}