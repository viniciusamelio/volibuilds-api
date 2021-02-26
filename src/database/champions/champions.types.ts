import { Document, Model } from "mongoose";

export interface IChampion{
  picture?: String,
  lane?: String,
  games?:String,
  data?:Object,
  spells?:Object,
  starting?:Object,
  endGameItems?:Object,
  skills?:Object,
  runes?:Object,
  dateOfEntry?: Date,
  lastUpdated?: Date
}

export interface IChampionDocument extends IChampion,Document{}

export interface IChampionModel extends Model<IChampionDocument>{}