import puppetter from 'puppeteer';
const getSpells = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const spells : Array<Object> = [];
        const table = document.querySelector('.champion-overview__table--summonerspell tbody');
        const rows = table?.querySelectorAll('tr');
        rows?.forEach(item=>{
            item.querySelectorAll('.champion-overview__data img').forEach((image: any)=>{
                spells.push('https:'+image.attributes.src.value)
            });
        });
        return spells;
    });
}

export default getSpells;