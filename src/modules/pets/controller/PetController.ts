import { Request, Response } from 'express';
import { PetRepository } from '../repositories/PetRepository';
import { CreatePetService } from '../services/CreatePetService';
import { ListPetsService } from '../services/ListPetsService';
import { GetPetDetailsService } from '../services/GetPetDetailsService';

export class PetController {
    private petRepository: PetRepository;

    constructor() {
        this.petRepository = new PetRepository();
    }

    async createPet(req: Request, res: Response): Promise<Response> {
        const { name, city, description, orgId } = req.body;

        const createPetService = new CreatePetService(this.petRepository);

        const pet = await createPetService.execute({ name, city, description, orgId });

        return res.status(201).json(pet);
    }

    async listPets(req: Request, res: Response): Promise<Response> {
        const { city } = req.query;
        const filters = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City is required' });
        }

        const listPetsService = new ListPetsService(this.petRepository);

        const pets = await listPetsService.execute({ city: city as string, filters });

        return res.status(200).json(pets);
    }

    async getPetDetails(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const getPetDetailsService = new GetPetDetailsService(this.petRepository);

        const pet = await getPetDetailsService.execute(id);

        return res.status(200).json(pet);
    }
}
