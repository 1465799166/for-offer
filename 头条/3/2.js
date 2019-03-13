const readline = require('readline')
const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lineCount = 1,
    n = 0,
    x = 0,
    a = []
rs.on('line', function (line) {
    if (lineCount == 1) {
        var lineArr = line.split(' ')
        n = parseInt(lineArr[0])
        x = parseInt(lineArr[1]) - 1
        lineCount++
    } else if (lineCount == 2) {
        a = line.split(' ')
        var t = parseInt(a[x] / n)
        var num = n * t
        a = a.map(room => {
           return room - t
        }) 
        while(a[x] > 0) {
            a[x]--
            x--
            num++ 
            if(x < 0) {
                x = n - 1
            }
        }
        a[x] = num
        a.forEach(room => {
        //    console.log(room)
            process.stdout.write(room.toString() + ' ')
        })
        process.exit(0)
    }
})