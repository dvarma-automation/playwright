import {test,expect,Locator} from "@playwright/test";

test('Dynamic drop down',async({page})=>{
await page.goto('https://www.flipkart.com');

 //page.waitForTimeout(10000);
await page.locator("input[name='q']").first().fill("watch");
const options:Locator= page.locator("form>ul>li");
console.log(options);





})