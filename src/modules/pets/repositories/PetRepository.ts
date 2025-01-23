import { Pet } from '../entities/Pet';

export class PetRepository {
    private pets: Pet[] = [];

    async create(petData: Pet): Promise<Pet> {
        const pet = new Pet(petData);
        this.pets.push(pet);
        return pet;
    }

    async listByCity(city: string): Promise<Pet[]> {
        return this.pets.filter(pet => pet.city === city);
    }

    async findById(id: string): Promise<Pet | undefined> {
        return this.pets.find(pet => pet.id === id);
    }
}
