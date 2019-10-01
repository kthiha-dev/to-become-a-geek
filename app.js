'use strict';
require('dotenv').config()
const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) =>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	callEnv();
	res.end('Hello World');
});

const newOne = (param) => {
	console.log("Hello, " + param);
}

let newOneAgain = (v1,v2 = 100) => {
	console.log(v1+v2);
};

const looping = () => {
	let arr = [1,43,402,2039,3,502];
	for(let val of arr) {
		//console.log(val);
	}

	
	//console.log(rvString);
	// for(let char of str.reverse()) {
	// 	amd+=char;
	// }
	//console.log(amd);
};

let SumElements = (arr) => {
	console.log(arr); // [10, 20, 40, 60, 90]
  	let sum = 0;
	for (let element of arr) {
	 	sum += element;
	}
	console.log(sum); // 220. 
   }

const spread = () => {
	var obj1 = { foo: 'bar', x: 42 };
	var obj2 = { foo: 'baz', y: 13 };

	//var clonedObj = { ...obj1 };
	// Object { foo: "bar", x: 42 }

	var mergedObj = { ...obj1,...obj2};
	console.log(mergedObj);
}

const newMap = (name,age,...arg) => {
	let newMap = new Map();
	newMap.set('name',name);
	newMap.set('age',age);
	newMap.set('interest',arg);
	console.log(newMap.keys());
	console.log(newMap.values());
	console.log(newMap.size);
	console.log(newMap.get('interest'));
	console.log(newMap.get('name'));
};

const callEnv = () => {
	console.log(process.env.SALARY)
}

server.listen(port,hostName,()=>{
	callEnv();
	console.log(`Running on http://${hostName}:${port}/`);
})