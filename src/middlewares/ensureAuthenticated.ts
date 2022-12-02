import {
    Request,
    Response,
    NextFunction
} from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o token
    const authToken = request.headers.authorization;


    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Validar se token é valido
    const token = authToken.split(' ');

    try {
        const decode = verify(token[1], "3810931a28ff71db6a8bd63cc150a5cc");
    } catch (error) {
        return response.status(401).end();
    }


    // Recuperar informações do usuário


    return next();
}