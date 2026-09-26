import {test,expect,Locator} from '@playwright/test';

test('Multi select drop down actions',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

//await page.locator('#colers').selectOption(['Red','Green','Blue']);
await page.locator('#colors').selectOption(['red','green','blue']);
//await page.locator('#colers').selectOption([{label:'Red'},{label:'Green'},{label:'Blue'}]);
//await page.locator('#colers').selectOption([{index:0},{index:2},{index:5}]);

const colorsdropdownOption:Locator= page.locator('#colors>option');

//const colorsdropdownContent:string[]=await colorsdropdownOption.allTextContents();
//console.log(colorsdropdownContent);

const colorsdropdownContent:string[]=(await colorsdropdownOption.allTextContents()).map(text=>text.trim());
expect(colorsdropdownContent).toHaveLength(7);
console.log(colorsdropdownContent);

expect(colorsdropdownContent).toContain('Red');

for(const content of colorsdropdownContent){

    console.log(content);
}


})