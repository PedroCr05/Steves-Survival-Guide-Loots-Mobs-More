const { Schema } = require(`mongoose`);

const BiomeSchema = new Schema(
  {
    biomeName: { type: String, required: true },
    biomeImage: { type: String, required: true },
    dimensionBiomeBelongsTo: [
      { type: Schema.Types.ObjectId, ref: `Dimension` },
    ],
    biomeMobs: [{ type: Schema.Types.ObjectId, ref: `Mob` }],
    biomeStructureName: { type: String, required: false },
    biomeStructureImages: [{ type: String, required: false }],
  },
  { timestamps: true }
);

module.exports = BiomeSchema;
