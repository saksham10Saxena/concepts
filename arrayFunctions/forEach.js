let arr = [1, 2, 3];
// let copy = [];
 for (let i = 0; i <= 2; i++) {
     console.log(arr[i]);
}

// arr.forEach(function (x) {
//     // console.log(x);
//     copy.push(x);
// });


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

var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word){
    
    if (words === 'two'){
        words.shift();
    }
    console.log(word);
});


