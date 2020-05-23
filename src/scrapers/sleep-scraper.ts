import { Page } from 'puppeteer'
// import { waitAndClick } from '../utils'

export interface SleepStats {
    bedTime: string
    wakeTime: string
}

export async function sleepScraper(page: Page): Promise<SleepStats> {
    await page.waitFor('ul.main > li:nth-child(2)')
    await page.click('ul.main > li:nth-child(2)')
    await page.waitFor('a[href^="/modern/sleep/"]')
    await page.click('a[href^="/modern/sleep/"]')
    const stats = await page.$eval('span.InlineEdit_label__cDTfw', el => el.textContent)
    return {
        bedTime: (stats || [])[0],
        wakeTime: (stats || [])[1],
    }
}
