const mongoose = require("mongoose");
const schema = mongoose.Schema;
// Schema defines the structure of the document
//that's gonna store inside a collection

const blogSchema = new schema(
	{
		title: {
			type: String,
			required: true
		},
		snippet: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
	// timestamps gonna auto update all properties for us whenever required in future
);

// model is a thing that surrounds the structure and provides us an interface
// by which we communicate with a database collection for that document type
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
