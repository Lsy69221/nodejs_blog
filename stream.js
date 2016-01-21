
var fs = require('fs');

var data = '';

//  创建可读流
var readerStream = fs.createReadStream('package.json');

readerStream.setEncoding('UTF8');

//  处理流事件
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
	console.log(data);
})

readerStream.on('error', function (err) {
	console.log(err.stack);
})

console.log('程序执行完毕');

/*创建写入流*/

var writeStream = fs.createWriteStream('output.txt');

data = '测试写入数据';

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
	console.log('写入完成');
});

writeStream.on('error', function (err) {
	console.log(err.stack);
});

console.log('程序执行完毕');

/*管道流操作实例*/

readerStream = fs.createReadStream('input.txt');

writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log('程序执行完毕');

















