import { Schema } from "mongoose";
const ChampionSchema = new Schema({
  picture: String,
  lane: String,
  games:String,
  data:Object,
  spells:Object,
  starting:Object,
  endGameItems:Object,
  skills:Object,
  runes:Object,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});
export default ChampionSchema;