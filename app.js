import express from "express";
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("Ciao");
});

app.listen(port, () => {
    console.log("In ascolto dalla porta " + port);
});
