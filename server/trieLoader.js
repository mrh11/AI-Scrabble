const fs = require('fs');
const inputPath = require('./ScrabbleWords.csv');
let ScrabbleTrie = require('./trie.js');
const csv = require('csv-parser');

fs.createReadStream(inputPath)
.pipe(csv())
.on('data', function(data){
    try {
        //perform the operation
        console.log(data);
    }
    catch(err) {
        //error handler
        console.log(err);
    }
})
.on('end',function(){
    //some final operation
    console.log('complete')
});  

