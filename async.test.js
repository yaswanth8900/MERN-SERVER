const {fetchData,MyData}=require('./test/async.js');

test('The data expected is admin', done => {
    function callback(data){
        try{
            expect(data).toBe('Admin');
            done();
        }
        catch(error){
            done(error)
        }
    }
    fetchData(callback)
})
test('CallBack My Data',done =>{
    function callback(data){
        try{
            expect(data.id).toBe(10011);
            done();
        }
        catch(error){
            done(error)
        }
    }
    MyData(callback)
})
