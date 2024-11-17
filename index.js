const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	res.end("Welcome To My First Deployment");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

// const upperCase = require("upper-case").upperCase;

// const str = "sudarshan";

// console.log(upperCase(str));

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
// 	const url = req.url;

// 	if (url === "/") {
// 		res.writeHead(200, { "content-type": "text/html" });
// 		res.end("Home Page");
// 	} else if (url === "/about") {
// 		res.writeHead(200, { "content-type": "text/html" });
// 		res.end("About Page");
// 	} else if (url === "/api") {
// 		res.writeHead(200, { "content-type": "text/html" });
// 		res.end(
// 			JSON.stringify({
// 				firstName: "Bruce",
// 				lastName: "Wayne",
// 			})
// 		);
// 	} else {
// 		res.writeHead(404);
// 		res.end("Page not Found");
// 	}
// });

// server.listen(3000, () => {
// 	console.log("Server running on port 3000");
// });

// const fs = require("fs");
// const zlib = require("zlib");

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./greet.txt", {
// 	encoding: "utf-8",
// 	highWaterMark: 2,
// });

// readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeStream = fs.createWriteStream("./file.txt");

// readStream.pipe(writeStream);

// readStream.on("data", (chunk) => {
// 	console.log(chunk);
// 	writeStream.write(chunk);
// });

// const fs = require("fs/promises");

// async function readFile() {
// 	try {
// 		const data = await fs.readFile("./greet.txt", "utf-8");
// 		console.log(data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// console.log("First");
// readFile();
// console.log("Second");

// fs.readFile("./greet.txt", "utf-8")
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// console.log("After FS");

// const fs = require("fs");

// const file = fs.readFileSync("./Hello.txt", "utf-8");
// console.log("First");
// console.log(file);
// console.log("second");
// const file2 = fs.readFile("./Hello.txt", "utf-8", (error, data) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(data);
// 	}
// });
// console.log("Third");

// fs.writeFileSync("./greet.txt", "Hello there");
// fs.writeFile("./greet.txt", "Hello Sudarshan", { flag: "a" }, (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("File written Successfully");
// 	}
// });
