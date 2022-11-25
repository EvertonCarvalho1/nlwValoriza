import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = await usersRepository.findOne({
            email
        });

        // Verificar se o email existe
        if (!user) {
            throw new Error('Email/Password incorrect');
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

        //Gerar o token 
        const token = sign(
            {
                email: user.email
            },
            '3810931a28ff71db6a8bd63cc150a5cc',
            {
                subject: user.id,
            }
        );
    }
}

export { AuthenticateUserService } 