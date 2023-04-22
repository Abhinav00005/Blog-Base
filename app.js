// const { create } = require("domain");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");
// const { title } = require("process");

// express app
const app = express();

// connect to MongoDB
mongoose.set("strictQuery", false);
const dbURI =
	// "mongodb+srv://abhinav:pass1234@blogbase.hjcegsc.mongodb.net/blog-base?retryWrites=true&w=majority";
	"mongodb://abhinav:pass1234@ac-wetuaxb-shard-00-00.hjcegsc.mongodb.net:27017,ac-wetuaxb-shard-00-01.hjcegsc.mongodb.net:27017,ac-wetuaxb-shard-00-02.hjcegsc.mongodb.net:27017/blog-base?ssl=true&replicaSet=atlas-7vl3r0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		app.listen(3000);
		console.log("Database connected!");
	})
	.catch((err) => console.log(err));

// listen for requests
// app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));

// app.get("/", (req, res) => {
// 	// res.send("<h1>Home Page</h1>");
// 	res.sendFile("./views/index.html", { root: __dirname });
// });
// app.get("/about", (req, res) => {
// 	// res.send("<h1>About Page</h1>");
// 	res.sendFile("./views/about.html", { root: __dirname });
// });

// //redirects
// app.get("/about-me", (req, res) => {
// 	// res.send("<h1>About Page</h1>");
// 	res.redirect("./about");
// });

// // 404 page
// app.use((req, res) => {
// 	// res.send("<h1>About Page</h1>");
// 	res.status(404).sendFile("./views/404.html", { root: __dirname });
// });

// register view engines
app.set("view engine", "ejs");

// listen for requests
// app.listen(3000, () => {
// 	console.log(`Example app listening on port ${3000}!`);
// });

// app.use((req, res, next) => {
// 	console.log("new request was made :");
// 	console.log("host: ", req.hostname);
// 	console.log("path: ", req.path);
// 	console.log("method: ", req.method);

// 	// the browser hangs if we don't send any response here
// 	// as it doesn't knows what to do next so we have to explicitly tell it
// 	// to move on so we use a function called next()
// 	next();
// });

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Request Types :-
// GET requests to get a resource
// POST requests to create new data (e.g. a new blog)
// DELETE requests to delete data (e.g. delete a blog)
// PUT requests to update data (e.g. update a blog)

app.get("/", (req, res) => {
	// res.send("<h1>Home Page</h1>");

	// const blogs = [
	// 	{ title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
	// 	{ title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
	// 	{ title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" }
	// ];
	// res.render("index", { title: "Home", blogs });

	res.redirect("/blogs");
});
app.get("/about", (req, res) => {
	// res.send("<h1>About Page</h1>");
	res.render("about", { title: "About" });
});

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
// 	const blog = new Blog({
// 		title: "new blog",
// 		snippet: "about my new blog",
// 		body: "These new blog pages teach modern React and include live examples"
// 	});

// 	blog
// 		.save()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });
// // display all blogs
// app.get("/all-blogs", (req, res) => {
// 	Blog.find()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });
// // display only a single blog with the reference of id
// app.get("/single-blog", (req, res) => {
// 	Blog.findById("63e50b2a2154ed273dc22969")
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// blog routes
app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
	// res.send("<h1>About Page</h1>");
	res.status(404).render("404", { title: "404" });
});
