const input = require('prompt-sync')();
let x = input("Enter number to check it is prime number or not ");
for(let i=2;i<x;i++){
	if(x%i==0){
		console.log("it is not prime number.");
		return;
	}
}
console.log("it is a prime number");
