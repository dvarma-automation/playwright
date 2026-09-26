import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {readCSV} from '../utils/csvReader';

const loginData= readCSV('C:/Work/playwright/test-data/LoginData.csv');

loginData.forEach((data:any)=>{

    if(data.run!== 'true') return;

    test(`Login test ${data.username}`,async({page})=>{

        const loginPage= new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(data.username,data.password);

        if(data.expected==='Success')
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory');
        else
            await expect(loginPage.errorMessage).toBeVisible;

    })
})
    
