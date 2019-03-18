const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lineCount = 0
var n, m
rl.on('line', function (line) {
    if (lineCount == 0) {
        [n, m] = line.split(' ').map(item => parseInt(item))
    } else {
        var aArr = [],
            bArr = []
        var s = line.split(' ').forEach((item, index) => {
            if (item == 'a') {
                aArr.push(index)
            } else {
                bArr.push(index)
            }
        })
        for (let i of [0, 1]) {

            var arr = i == 0 ? aArr : bArr
            var result = 0
            if (m >= arr.length) { //这种情况下可以把所有字符全变成a或b
                result = str.length;
                break;
            }

            for (let i = 0; i + m < arr.length; i++) {
                var tmp = arr[i + m] - arr[i]
                result = tmp > result ? tmp : result
            }
            var j = 0
            while(j + len < arr.length) {
                console.log(j)
            }
        }



    }
})