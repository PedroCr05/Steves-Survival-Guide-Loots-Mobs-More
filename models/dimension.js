const { Schema } = require(`mongoose`);

const DimensionSchema = new Schema(
  {
    dimensionName: { type: String, required: true },
    dimensionImage: { type: String, required: true },
    dimensionBiomes: [{ type: Schema.Types.ObjectId, ref: `Biome` }],
  },
  { timestamps: true }
);

module.exports = DimensionSchema;
