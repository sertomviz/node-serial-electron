console.log('rfid test')

const fs = require('fs');
const readline = require('readline');


fs.createReadStream("/dev/ttyUSB0")
  .on('open', function(fd) {
    //console.log('begining scanning tags')
    })
  .on('end',  function(fd) { fd.close() })
  .on('data', function(data) {
      console.log(data)
  })
