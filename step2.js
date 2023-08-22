const fs = require('fs');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        console.log(data);
    });
}
function webCat(url) {
    axios.get(url)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching the URL:", error.message);
        });
}

const arg = process.argv[2];

if (!arg) {
    console.log("Please provide a file path or URL as an argument.");
} else if (arg.startsWith("http://") || arg.startsWith("https://")) {
    webCat(arg);
} else {
    cat(arg);
}
