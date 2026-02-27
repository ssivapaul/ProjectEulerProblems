/*From a Server (Fetch API):
Used to read a file hosted on your web server.
fetch('path/to/yourfile.txt')
  .then(response => response.text())
  .then(data => console.log(data));

//Synchronose(Blocks Execution)
const fs = require('fs');
const data = fs.readFileSync('0099_base_.txt', 'utf8');
console.log(data);
*/

// The simplest way to read a file in Node.js is to use the fs.readFile() method, passing it the file path, 
// encoding and a callback function that will be called with the file data (and the error):
const fs = require('node:fs');
let aData = []
fs.readFile('./LargestExponential/0099_base_exp.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);
  let aaData = []
  aData = data.split('\r\n')
  for(d of aData) aaData.push(d.split(','))
  let numA = []
  for(aa of aaData) {
    let numa = []
    for(a of aa) numa.push(Number(a))
    numA.push(numa)
  }
  console.log(numA)
});