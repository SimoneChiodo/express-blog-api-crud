const express = require("express");
const app = express();
const port = 3000;

// Abilito assets statici
app.use(express.static("public"));

// Importo i router
const postsRouter = require("./router/posts");
const pagesRouter = require("./router/pages");

// Imposto l'uso delle rotte contenute nei router
app.use("/", pagesRouter);
app.use("/posts", postsRouter);

// Avvio
app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});
