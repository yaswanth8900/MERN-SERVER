const add=require('./test/sum.js');
test('1+2 to 3', ()=>{
  expect(add(1,2)).toBe(3);

})
test('1+2 to 3', ()=>{
  expect(add(1,2)).toBe(3);
  
})
test('Object in array',()=>{
  const data={One:1}
  data['two']=2;
  expect(data).toEqual({One:1,two:2})
})
test('Value is NULL',()=>{
  const n=null;
  expect(n).toBeNull();
})
test('Value is undefined',()=>{
  const u=undefined;
  expect(u).toBeUndefined();
})

test('Value is True',()=>{
  const u=true;
  expect(u).toBeTruthy();
})

test('Value is False',()=>{
  const u=false;
  expect(u).toBeFalsy();
})