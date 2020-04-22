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
  .on('error', function(err) {
    console.log(err)
    fd.close()
  })

// async function processLineByLine() {
//   //const sr = fs.createReadStream('/dev/ttyUSB0');
//   const sr = fs.createReadStream('/home/toms/lineberry.json');
//
//   // const rl = readline.createInterface({
//   //   input: fileStream,
//   //   crlfDelay: Infinity
//   // });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//
//   // for await (const line of rl) {
//   //   console.log(line);
//   // }
//
//   sr.setEncoding('utf8');
//   sr.on('data', function (data) {
//       console.log(data)
//   });
//
// }

//processLineByLine();

// const SerialPort = require('serialport')
//
// SerialPort.list().then(ports => {
//   console.log('ports', ports);
// })
