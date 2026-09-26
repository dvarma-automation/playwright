import{expect, test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test ('Valid User login',async({page})=>{

const loginPage = new LoginPage(page);

await loginPage.gotoLoginPage();
//await loginPage.login('standard_user','secret_sauce');
await loginPage.login(loginData.validUser['user-name'],loginData.validUser.password);
//await loginPage.verifyLoginSuccess();

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Invalid user login',async({page})=>{

const loginPage=new LoginPage(page);

await loginPage.gotoLoginPage();
await loginPage.login(loginData.invalidUser['user-name'],loginData.invalidUser.password);
await expect(loginPage.errorMessage).toBeVisible();
});
