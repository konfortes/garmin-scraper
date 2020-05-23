import { Page } from 'puppeteer'

export async function waitAndClick(page: Page, selector: string): Promise<any> {
    await page.waitFor(selector)
    await page.click(selector)
}
