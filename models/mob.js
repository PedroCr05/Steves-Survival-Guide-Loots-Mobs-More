const { Schema } = require(`mongoose`);

const MobSchema = new Schema({
  mobName: { type: String, require: true },
  mobImage: { type: String, required: true },
  biomeMobBelongsTo: [{ type: Schema.Types.ObjectId, ref: `Biome` }],
  isMobHostile: { type: Boolean, required: true },
  isMobNeutral: { type: Boolean, required: true },
  mobTotalHitPoints: { type: Number, required: true },
});

module.exports = MobSchema;
