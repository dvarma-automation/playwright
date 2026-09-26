import {test} from '@playwright/test';

test('Test1',async({page})=>{

console.log('In test one...');
await page.goto('https://www.saucedemo.com/');

});

test('test 2',async({page})=>{

     console.log('In test 2...');
     await page.goto('https://playwright.dev/');
});