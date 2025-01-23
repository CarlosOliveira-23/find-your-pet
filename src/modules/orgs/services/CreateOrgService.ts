import { Org } from '../entities/Org';
import { OrgRepository } from '../repositories/OrgRepository';
import { AppError } from '../../../shared/errors/AppError';

interface IRequest {
    name: string;
    email: string;
    password: string;
    address: string;
    whatsapp: string;
}

export class CreateOrgService {
    constructor(private orgRepository: OrgRepository) {}

    async execute({ name, email, password, address, whatsapp }: IRequest): Promise<Org> {
        const orgAlreadyExists = await this.orgRepository.findByEmail(email);

        if (orgAlreadyExists) {
            throw new AppError('Organization already exists.');
        }

        const org = await this.orgRepository.create({
            name,
            email,
            password,
            address,
            whatsapp,
        });

        return org;
    }
}
