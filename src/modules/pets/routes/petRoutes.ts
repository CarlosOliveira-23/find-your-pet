import { Router } from 'express';
import { PetRepository } from '../repositories/PetRepository';
import { CreatePetService } from '../services/CreatePetService';

const petRoutes = Router();
const petRepository = new PetRepository();

petRoutes.post('/', async (req, res) => {
    const { name, city, description, orgId } = req.body;

    const createPetService = new CreatePetService(petRepository);

    const pet = await createPetService.execute({
        name,
        city,
        description,
        orgId,
    });

    return res.status(201).json(pet);
});

export { petRoutes };
