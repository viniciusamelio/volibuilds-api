import puppetter from 'puppeteer';
const getEndGameItems = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<Object> = [];
        const items : NodeListOf<any> = document.querySelectorAll('.ChampProfile-build-winrate img');
        items.forEach(item => {
            list.push({
                "img": item.attributes['data-src'].value,
                "name": item.attributes['alt'].value
            });
        });
        return list;
});
}

export default getEndGameItems;