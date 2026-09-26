import {test,expect,request,APIRequestContext,Page} from '@playwright/test';

let reqContext2:APIRequestContext;

test.beforeAll("set baseurl using hooks",async()=>{
  reqContext2=await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
     Accept:"application/json"   
    }
  });

})

test("verify get api request",async({request}) =>{
    const response= await request.get("https://restful-booker.herokuapp.com/booking",{headers:{
        Accept:"application/json"
    }
});
    expect(response.status()).toBe(200);
    console.log(await response.json());

});

test("verify get api request different way",async() =>{
    const reqContext= await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
         Accept:"application/json"
                }
    });
    const resp1= await reqContext.get("/booking");
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());

});

test("verify get api request using hooks",async() =>{

    const resp1= await reqContext2.get("/booking");
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());

});

test("verify get api request using baseUrl in config filr",async({request}) =>{
    const resp1= await request.get("/booking");
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());
});

test("verify get api request using baseUrl in config file - get a specific booking id",async({request}) =>{
    const resp1= await request.get("/booking/297");
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());
});

test("verify get api request using baseUrl in config file - filter using query parameter",async({request}) =>{
    const resp1= await request.get("/booking?firstname=Josh&lastname=Allen");
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());
});

test("verify get api request using baseUrl in config file - filter using query parameter way 2",async({request}) =>{
    const resp1= await request.get("/booking",{
        params:{
        firstname:"Josh",
        lastname:"Allen"
        }}
    );
    expect(resp1.status()).toBe(200);
    console.log(await resp1.json());
});

test("verify get api request assertions",async({request}) =>{
    const resp1= await request.get("/booking",{
        params:{
        firstname:"Josh",
        lastname:"Allen"
        }}
    );
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    console.log(await resp1.json());
});

test("verify get api request json body assertions",async({request}) =>{
    const resp1= await request.get("/booking/297" );
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    console.log(await resp1.json());
    const resp1json= await resp1.json(); 
    expect(await resp1json).toMatchObject({ firstname: 'Josh',
  lastname: 'Allen',
  totalprice: 111,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'super bowls'})
  expect (resp1json.firstname).toEqual("Josh")
});

test('verify api response entries from Ui', async({page})=>{
    const reqContext= await request.newContext({
        baseURL:"https://api.demoblaze.com",
        extraHTTPHeaders:{
         Accept:"*/*"
                }
    });
    const res=await reqContext.get('/entries');
    const resJson=await res.json();
    expect  (await resJson.Items[0].title).toEqual("Samsung galaxy s6");
    console.log(await resJson.Items[0].title);
    await page.goto("https://www.demoblaze.com/index.html");
    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(await resJson.Items[0].title);

    

  
     
})