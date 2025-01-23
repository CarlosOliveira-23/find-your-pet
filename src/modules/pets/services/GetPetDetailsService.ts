import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';
import { AppError } from '../../../shared/errors/AppError';

export class GetPetDetailsService {
    constructor(private petRepository: PetRepository) {}

    async execute(id: string): Promise<Pet> {
        const pet = await this.petRepository.findById(id);

        if (!pet) {
            throw new AppError('Pet not found', 404);
        }

        return pet;
    }
}
