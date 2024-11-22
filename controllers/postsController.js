const express = require("express");
const router = express.Router();

// Importo i post
const posts = require("../data/posts");

// METODI CRUD
// Metodo: Index (Visualizzare tutti gli elementi)
function index(req, res) {
    const tag = req.query.tag;
    let output;

    //Se non ho passato parametri
    if (!tag) res.type("json").send(posts);

    // Se ho passato tag come parametri
    // Se ho solo 1 tag
    if (!Array.isArray(tag)) {
        output = posts.filter((post) =>
            post.tag
                .map((currentTag) => currentTag.toLowerCase())
                .includes(tag.toLowerCase())
        );
    }
    //Se ho + tag
    else
        output = posts.filter((post) =>
            tag.every((currentTag) =>
                post.tag
                    .map((post) => post.toLowerCase())
                    .includes(currentTag.toLowerCase())
            )
        );

    res.type("json").send(output);
}

// Metodo: Show (Visualizzare un elemento)
function show(req, res) {
    const id = parseInt(req.params.id);
    if (checkID(res, posts, id)) return;

    res.json({
        msg: "Visualizzazione del post",
        post: posts.find((post) => post.id === id),
    });
}

// Metodo: Store (Creare un nuovo elemento)
function store(req, res) {
    res.type("json").send(`Creazione di un nuovo post`);

    // Prelevo i dati
    let { titolo, contenuto, immagine, tag } = req.body;

    const newPost = {
        titolo,
        contenuto,
        immagine,
        tag,
    };

    posts.push(newpost);
}

// Metodo: Update (Modificare interamente un elemento)
function update(req, res) {
    const id = parseInt(req.params.id);
    if (checkID(res, posts, id)) return;

    res.type("json").send(`Modifica integrale del post ${id}`);
}

// Metodo: Modify (Modificare parzialmente un elemento)
function modify(req, res) {
    const id = parseInt(req.params.id);
    if (checkID(res, posts, id)) return;

    res.type("json").send(`Modifica parziale del post ${id}`);
}

// Metodo: Destroy (Eliminare un elemento)
function destroy(req, res) {
    const id = parseInt(req.params.id);
    if (checkID(res, posts, id)) return;

    // Trovo l'indice dell'id da eliminare
    const indexToDelete = posts.find((post, index) => {
        if (index === id - 1) return index;
    });

    // Elimino il post
    posts.splice(indexToDelete, 1);

    console.log(posts);

    res.status(204).send();
}

//Funzione per contrallare gli ID
function checkID(res, array, id) {
    // Controllo l'ID
    if (id < 1 || id > array.length || isNaN(id)) {
        res.status(404).json({
            error: "This post doesn't exist",
        });

        return true;
    }

    return false;
}

//Esporto i metodi
module.exports = { index, show, store, update, modify, destroy };
