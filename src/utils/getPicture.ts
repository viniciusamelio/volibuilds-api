import puppetter from 'puppeteer';
const getPicture = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const picture: String = document.querySelectorAll('figure > img')[0].attributes[0].value;
        return picture;
    });
}

export default getPicture;