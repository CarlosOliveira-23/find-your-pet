import { Router } from 'express';
import { OrgRepository } from '../repositories/OrgRepository';
import { CreateOrgService } from '../services/CreateOrgService';

const orgRoutes = Router();
const orgRepository = new OrgRepository();

orgRoutes.post('/', async (req, res) => {
    const { name, email, password, address, whatsapp } = req.body;

    const createOrgService = new CreateOrgService(orgRepository);

    const org = await createOrgService.execute({
        name,
        email,
        password,
        address,
        whatsapp,
    });

    return res.status(201).json(org);
});

export { orgRoutes };
