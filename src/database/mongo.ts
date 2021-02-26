import * as Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connect = () => {
    const uri = "mongodb+srv://vinicius:<47513628>@pixelcoderscluster.ciqpy.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
    if (database) {
      return;
    }
    Mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    database = Mongoose.connection;
    database.once("open", async () => {
      console.log("Connected to database");
    });
    database.on("error", () => {
      console.log("Error connecting to database");
    });
  };
  export const disconnect = () => {
    if (!database) {
      return;
    }
    Mongoose.disconnect();
  };