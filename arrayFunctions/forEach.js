let arr = [1, 2, 3];
for (let i = 0; i <= 2; i++) {
    console.log(arr[i]);
}

arr.forEach(function (x) {
    console.log(x);
});


// myforEach; --------------------------------

arr.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(arr[i]);
    }
};

arr.myForEach(function (element) {
    element = element * 2;
    console.log(element);
});




