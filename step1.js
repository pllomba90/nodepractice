const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        console.log(data);
    });
}

const filePath = process.argv[2];

if (!filePath) {
    console.log("Please provide a file path as an argument.");
} else {
    cat(filePath);
}