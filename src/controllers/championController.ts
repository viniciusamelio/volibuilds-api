import { Request, Response } from 'express';
import puppetter from 'puppeteer';
import getPicture from '../utils/getPicture';
import getEndGameItems from '../utils/items/getEndGameBuild';
import getStarting from '../utils/items/getStarting';
import getSkillPriority from '../utils/skills/getSkillPriority';

class ChampionController {


    async getBuild(request: Request, response: Response) {
        try {
            const url = `https://tierlist.gg/champions/${request.params.champion}/Build`
            const browser = await puppetter.launch();
            const page = await browser.newPage();
            await page.goto(url);


            const picture: String = await getPicture(page);

            const lane: String | null | undefined = await page.evaluate(() => {
                const picture: String | null | undefined = document?.querySelector('.ChampProfile-hero-details > div.flex')?.textContent?.replace('\n', '');
                return picture;
            });

            const analyzedGames: String | null | undefined = await page.evaluate(() => {
                const games: String | null | undefined = document.querySelector('.ChampProfile-stats-block > p.h4')?.textContent?.replace(',', '.');
                return games;
            });

            const data: Array<Object> = await page.evaluate(() => {
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


            const startingItems: Array<Object> = await getStarting(page);
            const endGameItems: Array<Object> = await getEndGameItems(page);

            const skillPriority: Array<Object> = await getSkillPriority(page);

            const runes: Array<Object> = await page.evaluate(() => {
                const list: Array<Object> = [];
                const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-runes .active img');
                items.forEach(item => {
                    list.push({
                        "img": item.attributes['data-src'].value,
                        "name": item.attributes['alt'].value
                    });
                });
                return list;
            });

            const spells: Array<Object> = await page.evaluate(() => {
                const list: Array<Object> = [];
                const items: NodeListOf<any> = document.querySelectorAll('.ChampProfile-build-spells img');
                items.forEach(item => {
                    list.push({
                        "img": item.attributes['data-src'].value
                    });
                });
                document.querySelectorAll('.ChampProfile-menu > ul > li > a')[1].classList.add('counters');
                return list;
            });

            return response.json({ picture: picture, lane: lane, games: analyzedGames, data: data, spells: spells, starting: startingItems, items: endGameItems, skills: skillPriority, runes: runes});
        } catch (error) {
            return response.json(error).status(500);
        }
    }


}

export default ChampionController;