// ----------------------------------------
// Core Dependencies & App Configuration
// ----------------------------------------

const express = require("express"); // Core Express framework for routing and middleware
const app = express(); // Instantiate the Express application
const port = 3000; // Port on which the server listens
const path = require("path"); // Node.js utility for handling and transforming file paths
const { v4: uuidv4 } = require("uuid"); // UUID library to generate unique post IDs
const methodOverride = require("method-override"); // Allows support for PUT, PATCH, DELETE via forms

// ----------------------------------------
// Middleware Configuration
// ----------------------------------------

// Parses incoming request bodies (url-encoded form data)
app.use(express.urlencoded({ extended: true }));

// Enables overriding HTTP methods via query parameter (?_method=DELETE or PATCH)
app.use(methodOverride("_method"));

// Sets EJS as the view/template engine
app.set("view engine", "ejs");

// Sets the directory path for EJS view files (ensures cross-platform compatibility)
app.set("views", path.join(__dirname, "views"));

// Serves static assets from the "public" directory (CSS, images, client-side JS)
app.use(express.static(path.join(__dirname, "public")));

// ----------------------------------------
// In-Memory Mock Database (Temporary Storage)
// ----------------------------------------

let posts = [
  {
    id: uuidv4(), // Unique identifier for the post
    username: "ginny", // Author of the post
    content: "I Love live with Ashish", // Post content
  },
  {
    id: uuidv4(),
    username: "ashish",
    content: "I Love Magic...",
  },
  {
    id: uuidv4(),
    username: "ron",
    content: "I Love eating...",
  },
];

// ----------------------------------------
// Routes: CRUD for Posts Resource
// ----------------------------------------

// [READ ALL] GET /posts → Show all posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts }); // Render the list of posts using index.ejs
});

// [CREATE FORM] GET /posts/new → Show form to create a new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); // Render new post form
});

// [CREATE ACTION] POST /posts → Handle creation of new post
app.post("/posts", (req, res) => {
  const { username, content } = req.body; // Destructure form inputs
  const id = uuidv4(); // Generate a unique ID for the post
  posts.push({ id, username, content }); // Add the new post to the in-memory array
  res.redirect("/posts"); // Redirect to list of posts
});

// [READ SINGLE] GET /posts/:id → Show a single post by ID
app.get("/posts/:id", (req, res) => {
  const { id } = req.params; // Extract post ID from URL
  const post = posts.find((p) => p.id === id); // Find post by ID
  res.render("show.ejs", { post }); // Render the individual post view
});

// [UPDATE ACTION] PATCH /posts/:id → Update content of a post
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { content: newContent } = req.body; // Get updated content from form
  const post = posts.find((p) => p.id === id); // Locate the post to update
  if (post) post.content = newContent; // Update post if found
  res.redirect("/posts"); // Redirect to all posts
});

// [UPDATE FORM] GET /posts/:id/edit → Show edit form for a post
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id); // Find the post to edit
  res.render("edit.ejs", { post }); // Render edit form with current post data
});

// [DELETE] DELETE /posts/:id → Delete a post by ID
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id !== id); // Remove post from in-memory array
  res.redirect("/posts"); // Redirect back to posts list
});

// ----------------------------------------
// Start Server
// ----------------------------------------

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`); // Confirmation message
});
