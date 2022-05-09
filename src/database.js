import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost:27017/crud-mongo");
    console.log("BD connected to: ", db.connection.name);
  } catch (error) {
      console.log(error)
  }
})();
