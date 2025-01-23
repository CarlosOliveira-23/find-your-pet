import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

interface IRequest {
    name: string;
    city: string;
    description: string;
    orgId: string;
}

export class CreatePetService {
    constructor(private petRepository: PetRepository) {}

    async execute({ name, city, description, orgId }: IRequest): Promise<Pet> {
        const pet = await this.petRepository.create({
            name,
            city,
            description,
            orgId,
        });

        return pet;
    }
}
