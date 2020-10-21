const fs = require('fs');

const readStream = fs.createReadStream('./docs/words.txt');

readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk.toString());
});