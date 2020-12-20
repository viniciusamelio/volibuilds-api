import puppetter from 'puppeteer';
const getChampionList = async (page: puppetter.Page) => {
    return await page.evaluate(() => {
        const list: Array<any> = [];
        const champions: NodeListOf<any> = document.querySelectorAll('.TierPage-Tier-Items .TierItem');

        champions.forEach(item => {
            list.push({
                img: item.querySelector('img')?.attributes['data-src'].value,
                display: item.querySelector('h4')?.textContent,
                name:item.attributes['href'].value.split('/')[2],
                winrate: item.querySelector('.win-rate-alt span').textContent.replace('.', ','),
                tier: item.parentNode.parentNode.querySelector('h2').textContent.replace('Tier', '').trim()
            });
        });
        return list.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }

            if (a.name < b.name) {
                return -1;
            }

            return 0;
        });
    });
}

export default getChampionList;