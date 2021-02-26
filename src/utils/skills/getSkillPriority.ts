import puppetter from 'puppeteer';
const getSkillPriority = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const spells : Array<Object> = [];
        const table = document.querySelectorAll('.champion-overview__table--summonerspell tbody')[1];
        const rows = table?.querySelectorAll('tr');
        rows?.forEach(item=>{
            item.querySelectorAll('.champion-overview__data img').forEach((image: any)=>{
                spells.push('https:'+image.attributes.src.value)
            });
        });
        return spells;
    });
}

export default getSkillPriority;