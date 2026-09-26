import {test,expect,Locator} from '@playwright/test';

test ('Text input actions', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const textBox: Locator=page.locator('#name');

await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled();

const textBoxMaxLength:string|null=await textBox.getAttribute("maxlength");
console.log(textBoxMaxLength);
expect(textBoxMaxLength).toBe('15');

await textBox.fill('John Doe');

const textContent: String|null=await textBox.textContent();
console.log(`text= ${textContent}`);
const textValue:string= await textBox.inputValue();
console.log(`text=${textValue}`)
expect(textValue).toBe('John Doe');

const emailTextbox:Locator=page.locator('#email');
await emailTextbox.fill('a@b.com');

const phoneTextbox:Locator=page.locator('#phone');
await phoneTextbox.fill('41111232324');

const addressTextarea:Locator=page.locator('#textarea');
await addressTextarea.fill('10 Venetial Bay')
})

//radio button
test('Radio button actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   const maleRadio:Locator=page.locator('#male');

   await expect(maleRadio).toBeVisible();
   await expect(maleRadio).toBeEnabled();
   expect(await maleRadio.isChecked()).toBe(false);

   await maleRadio.check();
   expect(await maleRadio.isChecked()).toBe(true);
});

test.only('Checkbox actions',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const sundayCheckbox:Locator=page.locator('#sunday');
await sundayCheckbox.check();
await expect(sundayCheckbox).toBeChecked();

const days: string[]=["sunday","monday",'tuesday','wednesday','thursday','friday','saturday'];
const checkboxesDays:Locator[]= days.map(index => page.locator(`#${index}`));
expect(checkboxesDays.length).toBe(7);

for(const checkbox of checkboxesDays){
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}

for(const checkbox of checkboxesDays.slice(-3)){
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}


for(const checkbox of checkboxesDays){

    if(await checkbox.isChecked()){
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    }
    else {
      await checkbox.check();
    await expect(checkbox).toBeChecked();
    }
}

const index:number[]=[1,5,6];
for(const i of index ){

    await checkboxesDays[i].check();
    await expect(checkboxesDays[i]).toBeChecked();
}

const weekDay: string='sunday';
 await page.locator(`#${weekDay}`).check();
 expect(page.locator(`#${weekDay}`)).toBeChecked();

})