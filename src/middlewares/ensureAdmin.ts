import {
    Request,
    Response,
    NextFunction
} from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { user_id } = request;
    console.log('testando', user_id);

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin }: any = await usersRepositories.findOne(user_id);

    // Verificar se o usuário é admin

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}