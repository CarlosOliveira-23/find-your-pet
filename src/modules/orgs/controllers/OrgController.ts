import { Request, Response } from 'express';
import { OrgRepository } from '../repositories/OrgRepository';
import { CreateOrgService } from '../services/CreateOrgService';
import { LoginOrgService } from '../services/LoginOrgService';

export class OrgController {
    private orgRepository: OrgRepository;

    constructor() {
        this.orgRepository = new OrgRepository();
    }

    async createOrg(req: Request, res: Response): Promise<Response> {
        const { name, email, password, address, whatsapp } = req.body;

        const createOrgService = new CreateOrgService(this.orgRepository);

        const org = await createOrgService.execute({
            name,
            email,
            password,
            address,
            whatsapp,
        });

        return res.status(201).json(org);
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const loginOrgService = new LoginOrgService(this.orgRepository);

        const token = await loginOrgService.execute({ email, password });

        return res.status(200).json({ token });
    }
}
