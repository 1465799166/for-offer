const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(line) {
    var n = parseInt(line)
    var a1 = parseInt((1024 - n) /64 ) 
    var c64 = (1024 - n) % 64
    var a2 = parseInt(c64 / 16 )
    var c16 = c64 % 16
    var a3 = parseInt(c16 / 4)
    var c4 = c16 % 4
    var a4 = c4
    console.log(a1 + a2 + a3 + a4)
    process.exit(0)
})