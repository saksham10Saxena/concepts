//closure is very important concept : the basis of functional programming

var foo = function(){
    var x = 23;
    return function(){
        x++;
        console.log(x);
    };
};

var bar = foo();

bar();
bar();
bar();

// bar remembers value of x because of closure



// ----------------------------------------------
// normally

var z = function(){
    var p = 34;
}
console.log(p); // reference error because p is inside scope of function z;

//javascript garbage collector : - 
// javascript remembers value of a variable untill it has a reference alive
// if all references of a variable die. then  javascript garabge collector removes that value from the memory
// the value of a variable is kept inside memory only if there is address(reference) to that value
// i.e if there is no way of reaching a value inside memory (no referenece) then garbage collector removes that value from memory because it is wasting space
