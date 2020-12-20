import express from 'express';
import ChampionController from './controllers/championController';

const router = express.Router();
const championController = new ChampionController();

router.get('/',(request,response)=>{
    response.json({status:"ok"});
});

router.get('/champion/:champion',championController.getBuild);
router.get('/champion',championController.list);


export default router;