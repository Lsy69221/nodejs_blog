
var fs = require('fs');

//  引入压缩模块
var zlib = require('zlib');

//  压缩input.txt 为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');

