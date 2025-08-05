# 🧠 Quora Lite — CRUD App using Express.js + EJS

A simple **Quora-style web application** built with Node.js, Express, and EJS where users can create, read, update, and delete posts. It uses an in-memory mock database and RESTful routing with method overriding.

---

## 🚀 Features

- 📝 Create new posts (like questions or thoughts)
- 👀 View all posts
- 🔍 View a single post by ID
- ✏️ Edit existing posts
- ❌ Delete posts
- 🎨 Styled using basic CSS
- ⚙️ Method override support for PATCH & DELETE via forms

---

## 📸 Preview

> Here's how it looks (you can add real screenshots here):

- `index.ejs` → Shows all posts
- `new.ejs` → Form to add a new post
- `edit.ejs` → Form to update a post
- `show.ejs` → Individual post view

---

## 🏗️ Project Structure

```
REST_CLONE/
├── node_modules/
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

- [x] Node.js
- [x] Express.js
- [x] EJS (Embedded JavaScript Templating)
- [x] UUID (Unique Post IDs)
- [x] Method-Override (for PUT/PATCH/DELETE)
- [x] HTML/CSS

---

## 🔧 Installation & Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the folder
cd your-repo-name

# Install dependencies
npm install

# Run the app
node index.js
```

Then open your browser and go to:  
👉 `http://localhost:3000/posts`

---

## 🔄 RESTful Routes Overview

| Method | Route           | Description              |
| ------ | --------------- | ------------------------ |
| GET    | /posts          | View all posts           |
| GET    | /posts/new      | Show form to create post |
| POST   | /posts          | Create a new post        |
| GET    | /posts/:id      | View a single post       |
| GET    | /posts/:id/edit | Show form to edit post   |
| PATCH  | /posts/:id      | Update a post            |
| DELETE | /posts/:id      | Delete a post            |

---

## 🧪 Sample In-Memory Posts

```js
let posts = [
  {
    id: uuidv4(),
    username: "ginny",
    content: "I Love live with Ashish",
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
```

---

## 🙋‍♂️ Author

**Ashish Jha**  
🧑‍💻 [GitHub](https://github.com/your-username)  
📧 Email: your-email@example.com _(optional)_

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 💡 _Want to add database support (MongoDB) or deploy this on Render/Netlify? Let me know and I’ll guide you step-by-step!_
