import mongoose, { model, Schema } from "mongoose";
export async function dbconnect() {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://admin:Born2code%40admin@cohort3.0f0h7.mongodb.net/surajvdotme"
    );
    console.log("Db connected ⚙️⚙️");
  } catch (error: any) {
    console.log("error in connecting db");
    console.log("ERR", error);
  }
}

const CountSchema = new Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const Count = model("Count", CountSchema);
export default Count;
