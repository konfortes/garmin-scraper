require('dotenv').config()
import { login } from './login'
import { LOGIN_PATH } from './login-path'
import { default as puppeteer, Browser } from 'puppeteer'
const DEBUG = process.env.NODE_ENV !== 'development'

const user = process.env.LOGIN_USER || ''
const password = process.env.LOGIN_PASSWORD || ''
;(async (): Promise<any> => {
    const browser: Browser = await puppeteer.launch({ headless: DEBUG, args: ['--start-fullscreen'] })
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(LOGIN_PATH)
    await page.waitFor('#username')

    try {
        const afterLoginPage = await login(page, user, password)
        // await afterLoginPage.click('a.btnContinue')
        // await afterLoginPage.waitFor('#secondMenu1')
        // const fruitsPage = await navigateCategory(afterLoginPage, Category.Fruits)
        // const products = await listProducts(fruitsPage, Category.Vegetables)
        // console.log(products)
    } catch (error) {
        console.error(error)
    } finally {
        browser.close()
    }
})()
