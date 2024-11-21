const express = require("express");
const app = express();
const port = 3000;

// Abilito assets statici
app.use(express.static("public"));

// Importo i router
const postsRouter = require("./routers/posts");
const pagesRouter = require("./routers/pages");

// Imposto l'uso delle rotte contenute nei router
app.use("/", pagesRouter);
app.use("/posts", postsRouter);

// Avvio
app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});
