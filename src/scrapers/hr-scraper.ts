import { Page } from 'puppeteer'
// import { waitAndClick } from '../utils'

export interface HrStats {
    avgSleepHr: string
}

export async function hrScraper(page: Page): Promise<HrStats> {
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    await page.waitForSelector('ul.main > li:nth-child(2)')
    await page.click('ul.main > li:nth-child(2)')
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    await page.waitForSelector('a[href^="/modern/heartRate/"]')
    await page.click('a[href^="/modern/heartRate/"]')
    // TODO: fix the waitFor and remove this sleep
    await new Promise(r => setTimeout(r, 2000))
    await page.waitForSelector('span.DailySummaryCardMainValue_mainValue__2lb3z')
    const avgRestHr: HrStats = { avgSleepHr: '48' }

    // const stats = await page.$eval('span.InlineEdit_label__cDTfw', el => {
    //     return el.textContent
    // })
    // console.log(stats)
    // return {
    //     bedTime: (stats || [])[0],
    //     wakeTime: (stats || [])[1],
    // }
    return avgRestHr
}
