const fs = require('fs');
const path = require('path');
//fs and path are in built libraries of node
const filePath = path.join(__dirname, '../', './README.md');

//program to read a file
fs.readFile(filePath, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(data.toString());
    }
});