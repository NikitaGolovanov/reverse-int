module.exports = function reverse (n) {
        if (n<0) n=-n
        var str=n.toString()
        var arr=[]
        for (let i=0; i<str.length; i++) {arr.push(str[i])}
        return Number(arr.reverse().join(""))
}
