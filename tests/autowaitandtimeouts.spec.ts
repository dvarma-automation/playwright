import {test,expect} from '@playwright/test';

test('auto wait and timeouts',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

     await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
      expect(page.locator('hasText=Welcome to our store')).toBeVisible;

      page.locator('input[name="q"]').fill('Laptop');




})