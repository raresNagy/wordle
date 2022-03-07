// Libraries
var fs = require('fs');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var words = fs.readFileSync('5letterwords.txt', 'utf-8');
words = words.split('\n');
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var testWord = words_1[_i];
}
