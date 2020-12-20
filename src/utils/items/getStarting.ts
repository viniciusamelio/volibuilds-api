import puppetter from 'puppeteer';
const getStarting = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<Object> = [];
        const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-build-start img');
        items.forEach(item => {
            list.push({
                "img": item.attributes['data-src'].value,
                "name": item.attributes['alt'].value
            });
        });
        return list;
    });
}

export default getStarting;