import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { readData } from '../utils/unifiedataReader';

//const testData= readData('C:/Work/playwright/test-data/LoginData.xlsx', 'LoginData');
//const testData= readData('C:/Work/playwright/test-data/LoginData.csv');
const testData = readData('C:/Work/playwright/test-data/loginData_dynamic.json');

console.log(testData);

test.describe('Login Tests', () => {

    for (const data of testData) {


        // if (data.run !== true) continue;
        //  console.log(data.run);

        test(`Login test for - ${data.username}`, async ({ page }) => {
            //console.log(data.username);
            test.skip(data.run === false, 'Run flag=FALSE');
            const loginPage = new LoginPage(page);

            await test.step('Go to login page', async () => {
                await loginPage.gotoLoginPage();
            });

            await test.step('Perform login', async () => {
                await loginPage.login(data.username, data.password);

            });

            await test.step('Validate Result', async () => {
                if (data.expected === 'success') { await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); }
                else { await expect(page.locator('[data-test="error"]')).toBeVisible(); }
            });
        });

    }

});
