import { model, Schema } from 'mongoose';

const areaSchema = Schema({
  name: { type: String, required: true },
});

export const Area = model('Area', areaSchema);