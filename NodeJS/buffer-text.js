var fs =  require("fs");
var content = fs.readFileSync( __dirname + "/text.txt");
console.log(content);

console.log(content.toString());