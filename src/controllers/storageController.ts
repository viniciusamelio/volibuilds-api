import {Request, Response} from 'express';
import axios from 'axios';
import {connect, disconnect} from '../database/mongo';

class StorageController{
    async saveBuilds(request:Request, response: Response){
        try {
            connect();
            const result = await axios.get('/champion/aatrox');
            return response.json(result.data);
        } catch (error) {
            return response.json(error).status(500);
        }
                
    }
}

export default  StorageController;