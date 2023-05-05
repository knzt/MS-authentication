import { Router, Response, Request, NextFunction } from "express";

import { StatusCodes } from "http-status-codes";

const usersRouter = Router();

usersRouter.get("/users", (req: Request, res: Response, next: NextFunction ) => {
    const users = [
        { userName: "João" }
    ];

    res.status(StatusCodes.OK).send(users);
});

usersRouter.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction ) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({uuid});
})

usersRouter.post("/users", (req: Request, res: Response, next: NextFunction ) => {
    const newUser = req.body;
    res.status(StatusCodes.OK).send(newUser);
})

export default usersRouter;
