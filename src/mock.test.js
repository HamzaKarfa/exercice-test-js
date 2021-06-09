import React from 'react';

test("returns undefined by default", () => {
  	const mock = jest.fn();    
  	let result = mock("foo");
    //tester que result est bien undefined
    expect(result).toBeUndefined(); 
    //tester que la fonction mock a bien été appelée
    expect(mock.mock.calls.length).toBe(1)

 	let new_result = mock("foo2");
     //tester que la fonction mock a bien été appelée 2 fois 
     expect(mock.mock.calls.length).toBe(2)
    
    //tester que la fonction mock a bien été appelée avec le paramètre foo2
    // console.log(mock.mock.calls)
    expect(mock.mock.calls[1][0]).toBe('foo2')

});

const doAdd = (a, b, callback) => {    
  let add = a + b + 3;    
  callback(add);
};
test("calls callback with arguments added", () => {    
    const mock = jest.fn(x => x);
    doAdd(1,2,mock)
    expect(mock.mock.calls.length).toBe(1)
  //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2
  //vérifiez que la fonction a été appelée avec le bon paramètre
});

