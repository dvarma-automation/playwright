import { test, expect, Locator } from '@playwright/test'

test('tble pagination', async ({ page }) => {
    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');
    let hasmorePages = true;

    while (hasmorePages) {
        const rows = await page.locator("#example tbody tr").all();
        console.log(rows.length);

        for (const row of rows) {
            if (hasmorePages === true) {
                console.log(await row.innerText());

            }
            const nextButton: Locator = page.locator("button[aria-label='Next']");
            const isDisabled = await nextButton.getAttribute('class');
            //  const nextLabel= await nextButton.;
            if (isDisabled?.includes('disabled')) {
                console.log("ENd of Page");
                hasmorePages = false;
                break;


            }
            else {
                nextButton.click();
            }
        }
    }
})

test('filter tables', async ({ page }) => {
    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

    await page.locator('#dt-length-0').selectOption({ value: '25' });
    const rows = await page.locator("#example tbody tr").all();
    console.log(rows.length);
    expect(rows).toHaveLength(25);
})

test('search tables', async ({ page }) => {
    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

    await page.locator('#dt-search-0').fill('Paul Btrd');
    const rows = await page.locator("#example tbody tr").all();
    console.log(rows.length);

    if (rows.length >= 1) {
        let searchFound = false;
        for (let row of rows) {
            const text = await row.innerText();
            if (text.includes('Paul Btrd')) {
                searchFound = true;
                break;
            }
        }
    }else {
            console.log("Match found");
        }

    
    })