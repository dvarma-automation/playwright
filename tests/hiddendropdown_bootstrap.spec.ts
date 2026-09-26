import {test,expect,Locator} from '@playwright/test';

test('hidden drop down Bootstrap', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com");

    page.waitForTimeout(3000);
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.getByText("PIM").click();
    await page.locator('div[role="listbox"]').click;
     await page.waitForTimeout(3000);
    console.log( await options.count());
       






})