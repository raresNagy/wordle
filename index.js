var fs = require('fs');
var words = fs.readFileSync('dict.txt', 'utf-8');
words = words.split('\n');
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var testWord = words_1[_i];
    if (testWord.length != 5)
        continue;
    fs.appendFile('./5letterwords.txt', testWord + '\n', function (err) {
        if (err) {
            console.error(err);
            return;
        }
    });
}
