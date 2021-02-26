import express from 'express';
import ChampionController from './controllers/championController';
import StorageController from './controllers/storageController';

const router = express.Router();
const championController = new ChampionController();
const storageController = new StorageController();
router.get('/',(request,response)=>{
    response.json({status:"ok"});
});

router.get('/champion/:champion',championController.getBuild);
router.get('/champion',championController.list);

router.get('/teste',storageController.saveBuilds);

export default router;