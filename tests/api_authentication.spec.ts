import { test, expect, Page } from '@playwright/test'

test('get details', async ({ request }) => {
    const res = await request.get('/booking/10');
    console.log(await res.json());

})
let tokenValue: string;
test.beforeAll('generate token', async ({ request }) => {
    const res = await request.post('/auth',{
        data:{
               "username" : "admin",
              "password" : "password123"
        }
});
    console.log(await res.json());
    tokenValue=(await res.json()).token;

})

test('authentication in api request using token', async ({ request }) => {
    const res = await request.put('/booking/10', {
        headers: {
            Cookie: "token="+tokenValue
        },
        data: {

            "firstname": "Mary_updated2",
              "lastname": 'Jackson',
              "totalprice": 873,
          "depositpaid": false,
              "bookingdates": { "checkin": "2018-01-20", "checkout": "2022-09-05" },
  "additionalneeds": "Breakfast"

        }
    })
    expect( res.status()).toBe(200);
    console.log(await res.json());

})

test('authentication in api request', async ({ request }) => {
    const res = await request.put('/booking/10', {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {

            "firstname": "Mary_updated1",
              "lastname": 'Jackson',
              "totalprice": 873,
          "depositpaid": false,
              "bookingdates": { "checkin": "2018-01-20", "checkout": "2022-09-05" },
  "additionalneeds": "Breakfast"

        }
    })
    expect( res.status()).toBe(200);
    console.log(await res.json());

})

test('delete api request authentication in api request using token', async ({ request }) => {
    const res = await request.delete('/booking/12', {
        headers: {
            Cookie: "token="+tokenValue
        }
       })
    expect( res.status()).toBe(201);
    console.log( res.status());

})
