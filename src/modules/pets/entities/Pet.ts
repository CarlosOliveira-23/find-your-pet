export class Pet {
    id: string;
    name: string;
    city: string;
    description: string;
    orgId: string;

    constructor(props: Omit<Pet, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = Math.random().toString(36).substring(2, 15);
        }
    }
}
