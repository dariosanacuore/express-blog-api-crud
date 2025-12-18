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
    res.json(post);
}

function store(req, res) {
    res.json("Creo un nuovo post");
}

function









const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default controller