import Page from "./page"

class Careers extends Page {
    get careersContainter() { return $('#job-offers-section')}
    get qaAutomationEngineerOffer() { return $$('//*[@class = "job-offer__title" and contains(text(), "QA Automation Engineer")]')}
    get careerTitle() { return $$('h2.job-offer__title')}
    get departmentsDropdownButton() { return $('//span[text()="Department"]/ancestor::div/button')}
    get departmentsDropdownList() { return $('#job-offers__search ul')}
    get choosenDepartmentText() { return $('(//button[@class = "select--desktop"])[1]/span[not(contains(@class, "hidden-label"))]')}

    async chooseDepartment(department) {
        await this.departmentsDropdownButton.waitForDisplayed()
        await this.departmentsDropdownButton.scrollIntoView({block: 'center'})
        await this.departmentsDropdownButton.click()
        await this.departmentsDropdownList.waitForDisplayed()
        await this.departmentsDropdownList.$('li=' + department).click()
    }
    
    async waitForLoad() {
        await this.careersContainter.waitForDisplayed()
    }
}


export default new Careers()