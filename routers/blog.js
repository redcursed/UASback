const express = require("express");
const routerBlog = express.Router();
const controllerBlog = require("../controllers/blog");

routerBlog
  .route("/blog")
  .get(controllerBlog.getBlog)
  .post(controllerBlog.insert);

routerBlog
  .route("/blog/:id")
  .put(controllerBlog.update)
  .delete(controllerBlog.delete)
  .get(controllerBlog.getBlogById);

routerBlog
  .route("/blog/author/:id")
  .get(controllerBlog.getAuthorByid)
  .put(controllerBlog.insertAuthor);

module.exports = routerBlog;
