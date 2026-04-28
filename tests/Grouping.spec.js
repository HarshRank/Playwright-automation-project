const {test, expect} = require("@playwright/test")
const { log } = require("console")

test.beforeAll('test 1', async()=>{
    console.log('this is before all hook');
})

test.afterAll('test 2',async()=>{
    console.log('this is after all hook');
})

test.beforeEach('test 3',async()=>{
    console.log('this is before each hook');
})

test.afterEach('test 4',async()=>{
    console.log('this is after each hook');
})


test.describe('Group 1',()=>{
    test("Grouping",async({page})=>{
    console.log('test 1');
    
    })
    test("Grouping 2",async({page})=>{
    console.log('test 2');
    
    })
})

test.describe('Group 2',()=>{
        test("Grouping 3",async({page})=>{
        console.log('test 3');
        
    })
    test("Grouping 4",async({page})=>{
        console.log('test 4');
        
    })
})
