import { Org } from '../entities/Org';

export class OrgRepository {
    private orgs: Org[] = [];

    async create(orgData: Org): Promise<Org> {
        const org = new Org(orgData);
        this.orgs.push(org);
        return org;
    }

    async findByEmail(email: string): Promise<Org | undefined> {
        return this.orgs.find(org => org.email === email);
    }
}
