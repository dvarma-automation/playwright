import {test,expect,Locator} from '@playwright/test';

test('SIngle selected drop down',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.locator('#country').selectOption('India');
   // await page.locator('#country').selectOption({value:'india'});
  //  await page.locator('#country').selectOption({label:'India'});
    //await page.locator('#country').selectOption({index:7});

    //await page.waitForTimeout(5000);

    const dropdownOptions:Locator= page.locator('#country>option');
    await expect(dropdownOptions).toHaveCount(10);

    //const dropdownTextcontent:string[]=await dropdownOptions.allTextContents();
    //console.log(dropdownTextcontent);

      const dropdownTextcontent:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
       // console.log(dropdownTextcontent);
        expect(dropdownTextcontent).toContain('Japan');

        for(const options of dropdownTextcontent){
            console.log(options);
        }
})