import ChampionSchema from './champions.schema';
import {IChampionDocument} from './champions.types';
import { model } from "mongoose";

export const ChampionModel = model<IChampionDocument>("champion", ChampionSchema);