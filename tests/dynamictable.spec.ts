 import {test,expect,Locator} from '@playwright/test'

 test('testing dynamic table',async({page})=>{
   await page.goto('https://practice.expandtesting.com/dynamic-table');

  const table:Locator= page.locator(".table.table-striped tbody");
  expect(table).toBeVisible();

  const rows:Locator[]=await table.locator("tr").all();
  console.log("Number of rows ="+ rows.length);
  expect(rows.length).toBe(4);

  let cpuValue='';
  for(const row of rows)
  {
    const processName:string=await table.locator("td").nth(0).innerText();
    if(processName==='Chrome'){
        cpuValue=await row.locator("td",{hasText:'%'}).innerText();
        break;
    }

  }
  console.log(cpuValue);

const yellow:string=await page.locator('#chrome-cpu').innerText();
  if(yellow.includes(cpuValue)){
  console.log("matches");}
  else{
    console.log("not matches");}
  expect(yellow).toContain(cpuValue);

  }






 )