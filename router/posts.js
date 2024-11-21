const express = require("express");
const router = express.Router();

// Importo i post
const posts = require("../db/posts");

// METODI CRUD
// Metodo: Index (Visualizzare tutti gli elementi)
router.get("/", (req, res) => {
    res.type("json").send({
        msg: "Visualizzazione dei post",
        posts,
    });
});

// Metodo: Show (Visualizzare un elemento)
router.get("/:id", (req, res) => {
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
});

// Metodo: Store (Creare un nuovo elemento)
router.post("/", (req, res) => {
    res.type("json").send(`Creazione di un nuovo post`);
});

// Metodo: Update (Modificare interamente un elemento)
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.type("json").send(`Modifica integrale del post ${id}`);
});

// Metodo: Modify (Modificare parzialmente un elemento)
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.type("json").send(`Modifica parziale del post ${id}`);
});

// Metodo: Destroy (Eliminare un elemento)
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.type("json").send(`Eliminazione del post ${id}`);
});

//Esporto i metodi
module.exports = router;
