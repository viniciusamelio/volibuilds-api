import puppetter from 'puppeteer';
const getLane = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const picture: String | null | undefined = document?.querySelector('.ChampProfile-hero-details > div.flex')?.textContent?.replace('\n', '');
        return picture;
    });
}

export default getLane;