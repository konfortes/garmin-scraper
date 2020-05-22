import { Page } from 'puppeteer'

export interface SleepStats {
    bedTime: string
    wakeTime: string
}

export async function sleepScraper(page: Page): Promise<SleepStats> {
    await page.click('i.icon-heart')
    await page.click('a[href^="/modern/sleep/"]')
    const stats = await page.$eval('span.InlineEdit_label__cDTfw ', el => el.textContent)
    return {
        bedTime: (stats || [])[0],
        wakeTime: (stats || [])[1],
    }
}
