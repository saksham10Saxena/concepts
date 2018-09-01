var a = ['This', 'is', 'a', 'game'];
console.log(a.join(' '));

function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s);
}
f(1, 'a', true);
f(1, 'a', 'this');

function f() {
    return Array.prototype.join.call(arguments);
    
}
var join = f(1, 'a', true);