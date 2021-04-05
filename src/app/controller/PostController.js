const PostModel = require("../models/PostModel");
class PostController {
    // GET -- api/post/
    // Get All Post
    // Private
    index(req, res) {
        res.send(" Page Index");
    }

    // Post -- api/post/
    // Post create Post
    // Private
    async store(req, res) {
        const { title, description, url, status } = req.body;
        if (!title)
            return res
                .status(400)
                .json({ success: false, message: "Please enter a title" });
        try {
            const post = await PostModel.find({ title, user: req.userId });
            console.log(post);

            if (post.length) {
                return res
                    .status(400)
                    .json({ success: false, message: "Title already exists" });
            }
            let urlnew = url.startsWith("https://") ? url : `https://${url}`;
            const newPost = new PostModel({
                title,
                description,
                url: urlnew,
                status: status || "To Learn",
                user: req.userId,
            });
            await newPost.save();
            res.json({
                success: true,
                message: "Created successfully",
                post: newPost,
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }

    //// GET  -- detail page
    show(req, res) {
        res.render("Detail Page");
    }

    //// GET  ---  edit page
    edit(req, res) {
        res.render("Edit Page");
    }

    //// PUT/PATCH --req update
    update(req, res) {
        res.render("Method update");
    }

    //// DELETE --req DELETE
    destroy(req, res) {
        res.render(" Method destroy");
    }
}

module.exports = new PostController();
