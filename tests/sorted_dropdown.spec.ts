import {test,expect,Locator} from '@playwright/test'

test('sorted dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');


 const originalDropdown:Locator=page.locator('#colors>option');
   // const originalDropdown:Locator=page.locator('#animals>option');
   // const originalDropdownContent1:string[]=await originalDropdown.allTextContents();
   // console.log(originalDropdownContent1)
    const originalDropdownContent:string[]=(await originalDropdown.allTextContents()).map(text=>text.trim());
    console.log(originalDropdownContent);
   
   // const originalList:string[]=originalDropdownContent;
    //const sortedList:string[]=originalList.sort();

      const originalList:string[]=[...originalDropdownContent];
    const sortedList:string[]=[...originalList].sort();
    console.log("Original List",originalList);
    console.log("Sorted List",sortedList);

expect(originalList).toEqual(sortedList);
})