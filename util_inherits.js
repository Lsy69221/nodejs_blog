var util = require('util'); 
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
	console.log('Hello ' + this.name); 
	}; 
} 
Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 

function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}

var obj = new Person();

//  把一个对象转化成字符串输出
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.isArray(obj));
console.log(util.isRegExp(obj));

