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

    it('Check if theres only one qa automation engineer role open', async ()=>{
        expect(await careers.qaAutomationEngineerOffer.length).toEqual(1)
    })
})