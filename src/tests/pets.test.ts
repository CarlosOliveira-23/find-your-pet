import request from 'supertest';
import { app } from '../shared/http/App';

describe('Pets API', () => {
    it('should be able to create and list pets', async () => {
        const orgResponse = await request(app)
            .post('/orgs')
            .send({
                name: 'Org Test',
                email: 'org@test.com',
                password: '123456',
                address: 'Test Address',
                whatsapp: '999999999',
            });

        const orgId = orgResponse.body.id;

        const petResponse = await request(app)
            .post('/pets')
            .send({
                name: 'Pet Test',
                city: 'Test City',
                description: 'Test Description',
                orgId,
            });

        expect(petResponse.status).toBe(201);

        const listResponse = await request(app).get('/pets?city=Test City');

        expect(listResponse.status).toBe(200);
        expect(listResponse.body).toHaveLength(1);
        expect(listResponse.body[0]).toHaveProperty('name', 'Pet Test');
    });
});
