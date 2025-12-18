import express from "express";
import postsController from "./controllers/postsController"
const router = express.Router();

const posts = [
    {
        id: 1,
        titolo: "Viaggio in montagna",
        contenuto: "La montagna è il luogo ideale per rilassarsi e fare trekking immersi nella natura.",
        tags: ["viaggio", "natura", "montagna", "trekking"]
    },
    {
        id: 2,
        titolo: "Ricetta della pizza fatta in casa",
        contenuto: "Scopri come preparare una pizza deliziosa con ingredienti freschi e semplici.",
        tags: ["cucina", "ricetta", "pizza", "cibo"]
    },
    {
        id: 3,
        titolo: "Consigli per la fotografia notturna",
        contenuto: "Impara le tecniche base per catturare splendide foto durante la notte.",
        tags: ["fotografia", "notte", "tecniche", "consigli"]
    },
    {
        id: 4,
        titolo: "Allenamento a casa senza attrezzi",
        contenuto: "Ecco una routine completa per restare in forma anche senza andare in palestra.",
        tags: ["fitness", "casa", "allenamento", "salute"]
    },
    {
        id: 5,
        titolo: "Guida ai film di fantascienza",
        contenuto: "Una lista dei migliori film di fantascienza da vedere almeno una volta nella vita.",
        tags: ["cinema", "fantascienza", "film", "guida"]
    }
];
//INDEX
router.get("/", (req, res) => {
    res.json(posts);
});
//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    res.json(post);
})

//STORE
router.post("/", (req, res) => {
    res.json("Creo un nuovo post");
})

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

