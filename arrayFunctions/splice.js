var months = ['January', 'March', 'April'];
months.splice(1,0,'Febuary');
console.log(months);
months.splice(4,0,'May');  //[ 'January', 'Febuary', 'March', 'April', 'May' ]
console.log(months);

//Remove one element and add one element and store the removed element in variable removed

var days = ['Monday','Tuesday','Sunday','Thursday'];
 var removed = days.splice(2,1,'Wednesday');
 console.log(days);  //[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ]
 console.log('The removed day is :',removed); //The removed day is : [ 'Sunday' ]
var removeded= days.splice(-7,1);
console.log(removeded);
