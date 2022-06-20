const puppeteer = require('puppeteer');



describe('Launch chrome browser ', () => {

    it('Navigate to demosite', async function () {

        const browser = await puppeteer.launch({ headless: false })

        const page = await browser.newPage()

        await page.goto("https://opensource-demo.orangehrmlive.com/")

        await page.waitForTimeout(3000)

        await browser.close();




    })

})