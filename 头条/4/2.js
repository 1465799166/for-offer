const read = require('readline');
const r1 = read.createInterface({
    input:process.stdin,
    output:process.stdout
})
var rows = [];
var arr = [];
r1.on('line',function(line){
    rows.push(line);
    if(rows.length >= 2)
    {
        var one = rows[0].split(' ').map((value)=>parseInt(value,10))[1];
        arr = rows[1].split('');
        var brr = [];
        for(var i=0;i<arr.length;++i)
        {
            if(arr[i] == 'a')
                brr.push(i);
        }
        var maxstack =[brr[one]];
        for(var j=1;j<=brr.length-one-1;++j)
        {
            maxstack.push(brr[j+one]-brr[j-1]-1);
        }
        maxstack.push(arr.length-brr[brr.length-one-1]-1);
        var first = (Math.max.apply(null,maxstack));
        var crr = [];
        for(var i=0;i<arr.length;++i)
        {
            if(arr[i] == 'b')
                crr.push(i);
        }
        var maxstack =[crr[one]];
        for(var j=1;j<=crr.length-one-1;++j)
        {
            maxstack.push(crr[j+one]-crr[j-1]-1);
        }
        maxstack.push(arr.length-crr[crr.length-one-1]-1);
        var second = (Math.max.apply(null,maxstack));
        console.log(Math.max(first,second));
    }
})