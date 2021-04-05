const auth = require("./auth");
const baseRouter = require("./base.router");
const postRouter = require("./post.router");
const verifyToken = require("../../middleware/auth");
function router(app) {
    app.use("/api/auth", auth);
    app.use("/api/post", verifyToken, postRouter);
    app.use("/", baseRouter);
}
module.exports = router;
