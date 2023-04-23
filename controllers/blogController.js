// MVC approach has been taken
const Blog = require("../models/blog");

// blog_index
const blog_index = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // to print the newest added blog firstly
		.then((result) => {
			res.render("blogs/index", {
				title: "ALL BLOGS",
				blogs: result
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

// blog_details
const blog_details = (req, res) => {
	const id = req.params.id;
	// console.log(id);
	Blog.findById(id)
		.then((result) => {
			res.render("blogs/details", { blog: result, title: "Blog Details" });
		})
		.catch((err) => {
			res.status(404).render("404", { title: "Blog not found" });
		});
};

// blog_create_get
const blog_create_get = (req, res) => {
	// res.send("<h1>About Page</h1>");
	res.render("blogs/create", { title: "" });
};

// blog_create_post
const blog_create_post = (req, res) => {
	const blog = new Blog(req.body);
	const title = blog.title;
	console.log(title);
	// if()
	// else{
	Blog.find({ title: title }).then((result) => {
		console.log(result);
		if (result.length > 0) {
			res.status(400).render("blogs/create", { title: "Blog already exists" });
		} else {
			blog
				.save()
				.then((result) => {
					// alert("New Blog Added");
					res.redirect("/blogs");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});
};

// blog_delete
const blog_delete = (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			//  we are not redrecting here bcz this is an ajax request and when we send
			// that request in node we can not use a redirect as a reponse
			// we have to send a JSON data back to the browser

			res.json({ redirect: "/blogs" });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	blog_index,
	blog_details,
	blog_create_get,
	blog_create_post,
	blog_delete
};
