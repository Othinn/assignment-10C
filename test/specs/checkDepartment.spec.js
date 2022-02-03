import { expectChai } from "chai"
import careers from "../pageobjects/careers"
import main_page from "../pageobjects/main_page"



describe('Check number of positions of qa automation eng', ()=>{

    it('Got to main page', async ()=>{
        await main_page.open('')
        await main_page.careersNavTab.waitForDisplayed()
        expect(await browser.getUrl()).toBe('https://10clouds.com/')
    })

    it('Go to careers tab', async ()=>{
        await main_page.careersNavTab.click()
        await careers.waitForLoad()
        expect(await browser.getUrl()).toBe('https://10clouds.com/careers/')
    })

    it('Change department to QA', async ()=>{
        await careers.chooseDepartment('QA')
        expect(await careers.choosenDepartmentText.getText()).toEqual('QA')
    })

    it('Check if all positions have Qa Engineer or QA Automation text', async ()=>{
        const array = await careers.careerTitle
        for( let x; x++; array.length){
            expectChai(await array[x].getText()).to.be.oneOf('QA Automation', 'QA Engineer')

        }
    }) 
})