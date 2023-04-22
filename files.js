const fs = require("fs");

// reading files
// fs.readFile("./blog1.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });
// console.log("Last line");

// fs.readFileSync("./blog12.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });
// console.log("Last line");

// writinging files
// fs.writeFile("./blog1.txt", "Hello! World", () => {
// 	console.log("File was updated");
// });

// fs.writeFile("./blog2.txt", "Hello! World", () => {
// 	console.log("File was updated");
// });

// directories
// if (!fs.existsSync("./assets")) {
// 	fs.mkdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("Folder created");
// 	});
// } else {
// 	fs.rmdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("Folder deleted");
// 	});
// }

// deleting directories
// if (fs.existsSync("./assets/deleteme.js")) {
// 	fs.unlink("./assets/deleteme.js", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("File deleted");
// 	});
// }

// streams
const readStream = fs.createReadStream("./blog3.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./blog4.txt");

// readStream.on("data", (chunk) => {
// 	console.log("----- NEW CHUNK -----");
// 	console.log(chunk);
// 	writeStream.write("\n NEW CHUNK \n");
// 	writeStream.write(chunk);
// });

readStream.pipe(writeStream);
