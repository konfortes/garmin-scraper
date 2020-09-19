import { Page } from 'puppeteer'
// import { waitAndClick } from '../utils'

export interface SleepStats {
    bedTime: string
    wakeTime: string
}

export async function sleepScraper(page: Page): Promise<SleepStats> {
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    await page.waitFor('ul.main > li:nth-child(2)')
    await page.click('ul.main > li:nth-child(2)')
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    await page.waitFor('a[href^="/modern/sleep/"]')
    await page.click('a[href^="/modern/sleep/"]')
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    const stats = await page.$eval('span.InlineEdit_label__cDTfw', el => {
        return el.textContent
    })
    console.log(stats)
    return {
        bedTime: (stats || [])[0],
        wakeTime: (stats || [])[1],
    }
}
