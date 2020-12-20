import puppetter from 'puppeteer';
const getSpells = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<Object> = [];
        const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-build-spells img');
        items.forEach(item => {
            list.push({
                "img": item.attributes['data-src'].value
            });
        });
        return list;
    });
}

export default getSpells;