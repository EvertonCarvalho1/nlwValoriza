import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        // Verificar se o email existe
        const usersRepository = getCustomRepository(UsersRepositories)

        // Verificar se senha está correta

        //Gerar o token 
    }
}

export { AuthenticateUserService } 