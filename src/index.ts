import express, { Request, Response, NextFunction } from "express";

import usersRouter from "./routes/users.route";

const app = express();

// CONFIGURAÇÕES DA APLICAÇÃO
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CONFIGURAÇÕES DE ROTAS
app.use(usersRouter);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'sucesso' });
});


// CONFIGURAÇÕES DO SERVER
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
