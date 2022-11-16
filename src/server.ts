import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';

import { router } from './routes';

import "./database";

const app = express();

//middleware que habilita o json na requisição
app.use(express.json());

//middleware entre server e router e o router chama os controllers
app.use(router);

//middleware que verifica e faz uma tratativa nos erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(3000, () => console.log('Server is running NLW'));