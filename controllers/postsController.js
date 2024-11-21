const express = require("express");
const router = express.Router();

// Importo i post
const posts = require("../data/posts");

// METODI CRUD
// Metodo: Index (Visualizzare tutti gli elementi)
function index(req, res) {
    res.type("json").send(posts);
}

// Metodo: Show (Visualizzare un elemento)
function show(req, res) {
    const id = parseInt(req.params.id);
    console.log(posts[id - 1]);

    // Controllo l'ID
    if (id < 1 || id > posts.length || isNaN(id)) {
        res.status(400).json({
            error: "Invalid ID",
        });

        return;
    }

    res.json({
        msg: "Visualizzazione del post",
        post: posts[id - 1],
    });
}

// Metodo: Store (Creare un nuovo elemento)
function store(req, res) {
    res.type("json").send(`Creazione di un nuovo post`);
}

// Metodo: Update (Modificare interamente un elemento)
function update(req, res) {
    const { id } = req.params;
    res.type("json").send(`Modifica integrale del post ${id}`);
}

// Metodo: Modify (Modificare parzialmente un elemento)
function modify(req, res) {
    const { id } = req.params;
    res.type("json").send(`Modifica parziale del post ${id}`);
}

// Metodo: Destroy (Eliminare un elemento)
function destroy(req, res) {
    const { id } = req.params;

    // Trovo l'indice dell'id da eliminare
    const indexToDelete = posts.find((post, index) => {
        if (index === id - 1) return index;
    });

    // Elimino il post
    posts.splice(indexToDelete, 1);

    console.log(posts);

    res.status(204).send();
}

//Esporto i metodi
module.exports = { index, show, store, update, modify, destroy };
