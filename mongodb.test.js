const mongoose=require('mongoose');

describe('MongoDB Connection',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://yash2004:yash2004@cluster0.gfw3rlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    });
    test('MongoDB Connected to Server',()=>{
    expect(mongoose.connection.readyState).toBe(1);
})
    
})
