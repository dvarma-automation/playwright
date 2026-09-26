import {test,expect} from '@playwright/test'

test('webdialogs', async ({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('heading',{'name':'Automation Testing Practice'})).toBeVisible();
  page.on('dialog',async(d1)=>{
    console.log(d1.message());
    d1.accept("hello");
    console.log(d1.type());
    d1.message();
   // d1.dismiss();
    
});
await page.getByRole('button',{'name':'Simple Alert'}).click();
await page.getByRole('button',{'name':'Confirmation Alert'}).click();
await page.getByRole('button',{'name':'Prompt Alert'}).click();



  })

