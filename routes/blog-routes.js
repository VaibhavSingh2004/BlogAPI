import express from "express";
import { getAllBlogs,addBlogs,updateBlog,getById,deleteById,getBlogByuserId} from "../controller/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBlogs)
blogRouter.put("/updateBlog/:id",updateBlog)

blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteById)
blogRouter.get("/user/:id",getBlogByuserId)


export default blogRouter