import express from "express";
import postsController from "../controllers/postsController.js"
const router = express.Router();

//INDEX
router.get("/", postsController.index)
//SHOW
router.get("/:id", postsController.show)


//STORE
router.post("/", postsController.store)

//UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json("Aggiorno il post numero" + id);
})
//MODIFY
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.json("Aggiorna parzialmente");
})
//DESTROY
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json("Cancella post");
})

export default router;
