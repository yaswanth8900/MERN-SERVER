let dataSets=[];
beforeAll(() =>{
    dataSets=['raju','ram'];
})
beforeAll(() =>{
    console.log('Before each setup is called');
})
afterEach(() =>{
    console.log('After each setup is called')
})
afterAll(() =>{
    dataSets=[]
})
test('Test Case',() =>{
    expect(dataSets.length).toBe(2);
})
test('data sets contains',()=>{
    expect(dataSets).toContain('raju');
})
test('data sets contains',()=>{
    expect(dataSets).toContain('ram');
})