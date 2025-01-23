import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

interface IRequest {
    city: string;
    filters?: {
        name?: string;
        description?: string;
    };
}

export class ListPetsService {
    constructor(private petRepository: PetRepository) {}

    async execute({ city, filters }: IRequest): Promise<Pet[]> {
        const petsInCity = await this.petRepository.listByCity(city);

        if (filters) {
            return petsInCity.filter(pet => {
                const matchesName = filters.name ? pet.name.includes(filters.name) : true;
                const matchesDescription = filters.description
                    ? pet.description.includes(filters.description)
                    : true;
                return matchesName && matchesDescription;
            });
        }

        return petsInCity;
    }
}
