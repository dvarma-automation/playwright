import {test,expect, request} from '@playwright/test'

test('Network Interception',async({page})=>{

    await page.route('**/products.json', async(route)=>{
        
        
        const interceptRequest=route.request();
        console.log('URL',interceptRequest.url());
        console.log('Method',interceptRequest.method());
        console.log('Headers',interceptRequest.headers());
        console.log('Product API intercepted');

        await route.continue();
            
      
    })
   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
   await page.waitForTimeout(5000);

})

test('Network Interception abort',async({page})=>{
    await page.route('**/products.json', async(route)=>{
       
        await route.abort();
         })
   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
   await page.waitForTimeout(5000);
})

test('Network Interception fetch',async({page})=>{
    await page.route('**/products.json', async(route)=>{
        const response= await route.fetch();
        const body = await response.json();

        body.products=body.products.slice(0,3);

        await route.fulfill({
            response,
            body: JSON.stringify(body)
        });
       
               });
   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
   await page.waitForTimeout(5000);
})