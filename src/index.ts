require('dotenv').config()
import { login } from './login'
// import { sleepScraper } from './scrapers/sleep-scraper'
import { hrScraper } from './scrapers/hr-scraper'
import { default as puppeteer, Browser } from 'puppeteer'
const DEBUG = process.env.NODE_ENV !== 'development'

const user = process.env.LOGIN_USER || ''
const password = process.env.LOGIN_PASSWORD || ''
;(async (): Promise<any> => {
    const browser: Browser = await puppeteer.launch({ headless: DEBUG, args: ['--start-fullscreen'] })
    try {
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 })

        await login(page, user, password)
        // const sleepStats = await sleepScraper(page)
        // console.log(JSON.stringify(sleepStats, null, 4))
        const hrStats = await hrScraper(page)
        console.log(JSON.stringify(hrStats, null, 4))
    } catch (error) {
        console.error(error)
    } finally {
        browser.close()
    }
})()
