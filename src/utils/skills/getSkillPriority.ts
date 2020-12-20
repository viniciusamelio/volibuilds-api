import puppetter from 'puppeteer';
const getSkillPriority = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<Object> = [];
        const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-abilities-order div.skill');
        items.forEach(item => {
            list.push({
                "img": item.firstChild.attributes['data-src'].value,
                "skill": item.attributes['data-content'].value
            });
        });
        return list;
    });
}

export default getSkillPriority;