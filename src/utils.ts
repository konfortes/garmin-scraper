import { Page } from 'puppeteer'

export async function waitAndClick(page: Page, selector: string): Promise<any> {
    await page.waitForSelector(selector)
    await page.click(selector)
}
