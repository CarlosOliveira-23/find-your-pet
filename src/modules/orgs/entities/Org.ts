export class Org {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    whatsapp: string;

    constructor(props: Omit<Org, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = Math.random().toString(36).substring(2, 15);
        }
    }
}
