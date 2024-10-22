const mongoose = require(`mongoose`);
const BiomeSchema = require(`./biome`);
const DimensionSchema = require(`./dimension`);
const MobSchema = require(`./mob`);

const Biome = mongoose.model(`Biome`, BiomeSchema);
const Dimension = mongoose.model(`Dimension`, DimensionSchema);
const Mob = mongoose.model(`Mob`, MobSchema);

module.exports = {
  Biome,
  Dimension,
  Mob,
};
