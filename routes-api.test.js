const app=require('./index');
const request=require('supertest');
describe('GET /users/getusers',()=>{
    test('GET users from /users/getusers API',async ()=>{
        const res=await request(app).get('/users/getusers').expect(200);
    })
})