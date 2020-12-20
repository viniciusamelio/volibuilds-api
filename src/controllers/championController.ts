import { Request, Response } from 'express';
import puppetter from 'puppeteer';
import getChampionList from '../utils/data/getChampionList';
import getData from '../utils/data/getData';
import getGames from '../utils/data/getGames';
import getLane from '../utils/data/getLane';
import getPicture from '../utils/data/getPicture';
import getEndGameItems from '../utils/items/getEndGameBuild';
import getStarting from '../utils/items/getStarting';
import getRunes from '../utils/runes/getRunes';
import getSkillPriority from '../utils/skills/getSkillPriority';
import getSpells from '../utils/spells/getSpells';

class ChampionController {


    async getBuild(request: Request, response: Response) {
        try {
            const url = `https://tierlist.gg/champions/${request.params.champion}/Build`
            const browser = await puppetter.launch();
            const page = await browser.newPage();
            await page.goto(url);


            const picture = await getPicture(page);

            const lane = await getLane(page);

            const analyzedGames = await getGames(page);

            const data = await getData(page);

            const startingItems = await getStarting(page);
            const endGameItems = await getEndGameItems(page);

            const skillPriority = await getSkillPriority(page);

            const runes: Array<Object> = await getRunes(page);

            const spells: Array<Object> = await getSpells(page);

            return response.json({ picture: picture, lane: lane, games: analyzedGames, data: data, spells: spells, starting: startingItems, items: endGameItems, skills: skillPriority, runes: runes });
        } catch (error) {
            return response.json(error).status(500);
        }
    }

    async list(request: Request, response: Response) {
        try {
            const url = `https://tierlist.gg/cheatsheet`
            const browser = await puppetter.launch();
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'networkidle2' });
            const championList: Array<Object> = await getChampionList(page);
            return response.json(championList);
        } catch (error) {
            return response.json(error).status(500);
        }
    }


}

export default ChampionController;