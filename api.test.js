const fetchData=require('./test/api');

test('GET /users/getusers api data',async ()=>{
    const data=await fetchData();
    console.log(data)
    expect(data).toHaveProperty('getAllUsers')
    data.getAllUsers.forEach(user => {
        expect(user).toHaveProperty('id');
    });
})