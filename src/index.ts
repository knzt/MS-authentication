import express from "express";
import statusRouter from "./routes/status.route";
import usersRouter from "./routes/users.route";

const app = express();

// CONFIGURAÇÕES DA APLICAÇÃO
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURAÇÕES DE ROTAS
app.use(usersRouter);
app.use(statusRouter);

// CONFIGURAÇÕES DO SERVER
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
