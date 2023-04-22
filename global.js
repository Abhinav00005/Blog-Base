setTimeout(() => {
	console.log("Aagya !");
	clearInterval(int);
}, 3000);

const int = setInterval(() => {
	console.log("Susu aa rha hai");
}, 1000);

console.log(__dirname);
console.log(__filename);
