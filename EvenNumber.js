const prompt = require('prompt-sync')();
let x = prompt("Enter number to check even or not ");
if(x%2==0){
	console.log(x+" is even number.");
}
else{
	console.log(x+" is not even number.");
}

let n = 1;
for(let i=n;i<100;i++){
	if(i%2==0){
		console.log(i+" ");
	}
}


