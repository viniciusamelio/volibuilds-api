import { IChampionDocument, IChampionModel } from "./champions.types";

export async function findOneOrCreate( this: IChampionModel, championId: string ): Promise<IChampionDocument> {
    const record = await this.findOne({ championId });
    if (record) {
      return record;
    } else {
      return this.create({ _id:championId });
    }
  }