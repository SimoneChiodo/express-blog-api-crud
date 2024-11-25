const express = require("express");
const app = express();
const port = 3000;

// Middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

app.use(express.json());
app.use(express.static("public"));

// Importo i router
const postsRouter = require("./routers/posts");
const pagesRouter = require("./routers/pages");

// Imposto l'uso delle rotte contenute nei router
app.use("/", pagesRouter);
app.use("/posts", postsRouter);

// Error Handler
app.use(errorsHandler);
app.use(notFound);

// Avvio
app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});
