jest.mock('./test/utils is mocked',()=>{
    getData:jest.fn()
    getRaw:jest.fn()
});
const { processData,processRaw } = require('./test/processData');
const {getData,getRaw}=require('./test/utils');
test('Moked the Process data',() =>{
    getData.mockReturnValue("Mocked Data");
    expect(processData()).toBe("Processed Mocked Data");
});

test('Moked the Process Raw',() =>{
    getRaw.mockReturnValue("Mocked Data");
    expect(processRaw()).toBe(false);
});