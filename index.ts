const fs = require('fs');
var words = fs.readFileSync('dict.txt', 'utf-8');
words = words.split('\n');


for (var testWord of words) {
    if (testWord.length != 5)
        continue;

   fs.appendFile('./5letterwords.txt', testWord + '\n', (err: any) => {
       if(err){
           console.error(err)
           return
       }
   })
}