import { Page } from 'puppeteer'
export const login = async (page: Page, user: string, password: string): Promise<Page> => {
    try {
        await page.type('#username', user)
        await page.type('#password', password)
        await page.click('#login-btn-signin')
        await page.waitFor('header.header')
        return page
    } catch (error) {
        console.error(`error login. ${error}`)
        throw error
    }
}
