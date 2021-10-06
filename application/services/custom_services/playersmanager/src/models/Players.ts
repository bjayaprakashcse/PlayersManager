
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const playerSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   address: String,
   phone_number: String,
   category: Number,
   pictures: [String],
   choosen_img: String
})

const playerModel = mongoose.model('player', playerSchema, 'player');
export default playerModel;
