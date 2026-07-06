const {test, expect} = require ('@playwright/test')

// test.only('Annotation',async({page})=>{
//     console.log('this is test1');    
// })
               // skip validation

// test('Annotation2',async({page,browserName})=>{
//     console.log('this is Annotation2');  
//     if(browserName=='chromium'){
//         test.skip()
//     }  
//     await page.goto('https://www.google.com')
// })
 
// test('test4',async({page})=>{
//     test.fixme()
//     console.log('this is test 4..');
    
// })

                // Fail
 test('test4',async({page})=>{
    test.fail()
    console.log('this is test 4..');
    expect(1).toBe(2)
}) 