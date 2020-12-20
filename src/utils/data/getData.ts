import puppetter from 'puppeteer';
const getData = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<Object> = [];
        const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-stats div.flex div');
        items.forEach(item => {
            list.push({
                "label": item.firstChild.textContent,
                "value": item.lastChild.textContent.replace('.',',')
            });
        });
        return list;
    });
}

export default getData;