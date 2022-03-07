// Libraries
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var words = fs.readFileSync('5letterwords.txt', 'utf-8');
words = words.split('\n');


for (var testWord of words) {

}