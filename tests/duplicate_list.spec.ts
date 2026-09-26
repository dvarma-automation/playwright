import {test,expect,Locator} from '@playwright/test';

test('Find duplicates in a list', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

const listOption:Locator=page.locator('#colors>option');
//const listOption:Locator=page.locator('#animals>option');

//const listOptionText:string[]= await listOption.allTextContents();
const listOptionsTextArray:string[]=(await listOption.allTextContents()).map(text=>text.trim());

const mySet= new Set<string>();
const duplicate:string[]=[];
for (const content of listOptionsTextArray)
{
    if( mySet.has(content))
      {duplicate.push(content);
      }
    else
        mySet.add(content);
    
    }
console.log(mySet);
console.log(duplicate);
//expect(duplicate.length).toBe(0);
})