import Page from "./page"

class MainPage extends Page {
    get careersNavTab() { return $('//a[@href = "/careers/"]/span[text() = "Careers"]')}
}


export default new MainPage()