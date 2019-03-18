const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var lineCount = 0
var n, m
rl.on('line', function (line) {
    if (lineCount == 0) {
        var lineArr = line.split(' ')
        n = lineArr[0]
        m = lineArr[1]
        lineCount++
    } else {
        var l = line.split(' ').map(item => parseInt(item)).sort((a, b) => a - b)
        var min = l[0]
        var max = l[l.length - 1]
        // var len = parseFloat((max / m).toFixed(2)) 
        // var len = max / m
        var len = min
        var tCount = 0

        while (len <= min) {
            var count = 0
            l.forEach(item => {
                count += parseInt(item / len)
            })
            if(count == m) {
                process.exit(0)
            } 
            len = parseFloat((len - 0.01).toFixed(2)) 
            console.log(count)
            
        }
    }
})