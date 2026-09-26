import {test, expect} from '@playwright/test';

test('My first test',async({page})=>{
    await page.goto('https://google.com');
    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.click();
    await page.keyboard.press('enter');
    await page.waitForTimeout(2000);
    const results= await page.locator('textarea').allTextContents();
    expect(results.length).toBeGreaterThan(0);
}
);