import posts from "../routers/data.js"

function index(req, res) {
    const risposta = {
        count: posts.length,
        results: posts
    }
    res.json(risposta)
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }
    res.json(post);
}

function store(req, res) {
    res.json("Creo un nuovo post");
}

function update(req, res) {
    const id = req.params.id;
    res.json("Aggiorno il post numero" + id);
}

function modify(req, res) {
    const id = req.params.id;
    res.json("Aggiorna parzialmente");
}

function destroy(req, res) {
    const id = req.params.id;
    res.json("Cancella post");
}









const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default controller