const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lineCount = 0
var n = 0
rl.on('line', function (line) {
    if (lineCount == 0) {
        n = parseInt(line)
        lineCount++
    } else {
        var str = line.split('')
        var i = 0
        while (i < str.length - 2) {
            if (str[i] != str[i + 1]) {
                i++
            } else if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
                str.splice(i, 1)
            } else if (str[i] == str[i + 1] && str[i + 2] == str[i + 3]) {
                str.splice(i + 2, 1)
            } else {
                i++
            }
        }
        var result = ''
        str.forEach(item => {
            result += item
        })
        console.log(result)
        if (lineCount == n) {
            process.exit(0)
        }
        lineCount++
    }
})