
//synchronous fn for finding square
const square = (a) => {
    return a * a;
};

//async square.
const squareAsync = (a, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number') {
            //error
            cb('a is not a number', null);
        }
        else {
            cb(null, a * a);
        }
    }, 2000);
};


// console.log(square(2));
squareAsync('dsdsd', function (err, squaredVal) {
    if(err){
        console.log(err);
        return ;
    }
    else{
        console.log(squaredVal);
    }
});