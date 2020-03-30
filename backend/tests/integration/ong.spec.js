const app = require("../../src/app");
const request = require("supertest");
const connection = require("../../src/database/connection");

describe('Ong', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post("/ongs").send({
            name: "ADAP",
            email: "contatato@sad.com",
            whatsapp: "3289328932",
            city: "São Paulo",
            uf: "SP"
        });

       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
    })
})