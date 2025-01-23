import { OrgRepository } from '../repositories/OrgRepository';
import { AppError } from '../../../shared/errors/AppError';
import jwt from 'jsonwebtoken';

interface IRequest {
    email: string;
    password: string;
}

export class LoginOrgService {
    constructor(private orgRepository: OrgRepository) {}

    async execute({ email, password }: IRequest): Promise<string> {
        const org = await this.orgRepository.findByEmail(email);

        if (!org || org.password !== password) {
            throw new AppError('Invalid email or password.', 401);
        }

        const token = jwt.sign({ id: org.id }, 'secret-key', {
            expiresIn: '1d',
        });

        return token;
    }
}
