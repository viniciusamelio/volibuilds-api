import puppetter from 'puppeteer';
const getGames = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const games: String | null | undefined = document.querySelector('.ChampProfile-stats-block > p.h4')?.textContent?.replace(',', '.');
        return games;
    });
}

export default getGames;