import {Page,test} from '@playwright/test'

test('Simple Web Table', async({page})=>{
    await page.goto('https://letcode.in/table');
    const table= page.locator('#simpletable');
    const columns=table.locator("thead");
    console.log("Column headers:"+await columns.allTextContents());

    const rows=table.locator("tbody tr");
    const rowsCount= await rows.count();
    console.log(rowsCount);
    console.log(await rows.allTextContents());
    console.log("no of columns"+await rows.locator("td").count())
 //   const cols=table.locator("tbody tr");

    await inputMatch(page,rows,"Raj");
    await inputMatch(page,rows,"Chatterjee");
})
    async function inputMatch(page:Page,rows:Locator,name: string){
    const nameMatch =rows.filter({
        has: page.locator("td"),
        hasText:name
});
await nameMatch.locator("input").check();
}



