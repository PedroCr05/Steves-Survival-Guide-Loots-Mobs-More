const db = require(`../db`);
const { Biome, Dimension, Mob } = require(`../models`);

db.on(
  `error`,
  console.error.bind(
    console,
    `
    ========================================
    +=+[Connection Unsuccessful: MongoDB]=+=
    ========================================
    `
  )
);

const main = async () => {
  await Biome.deleteMany();

  // List of getting items from the children (Dimensions and Mobs)
  const netherDim = await Dimension.findOne({
    dimensionName: `The Nether`,
  });

  // const overworldDim = await Dimension.findOne({
  //   dimensionName: `Overworld`,
  // });

  // const endDim = await Dimension.findOne({
  //   dimensionName: `The End`,
  // });

  const blaze = await Mob.findOne({
    mobName: `Blaze`,
  });

  // Main Content
  const biomes = [
    {
      biomeName: `Nether Wastes`,
      biomeImage: `https://minecraft.wiki/images/thumb/Nether_Fortress.png/250px-Nether_Fortress.png?999c7`,
      dimensionBiomeBelongsTo: netherDim._id,
      biomeMobs: [
        blaze._id,
        // zombifiedPiglin_.id,
        // ghast_.id,
        // piglin_.id,
        // magmaCube_.id,
        // enderman_.id,
        // strider_.id,
      ],
      biomeStructureName: `Fortress`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/thumb/Nether_Fortress_Crossroad.png/300px-Nether_Fortress_Crossroad.png?222c5`,
        `https://minecraft.wiki/images/thumb/Nether_Brick_Well.png/300px-Nether_Brick_Well.png?fe02b`,
        `https://minecraft.wiki/images/thumb/Nether_Fortress_Large_Stairs_Room.png/300px-Nether_Fortress_Large_Stairs_Room.png?234a7`,
        `https://minecraft.wiki/images/thumb/Enclosed_Fortress.png/300px-Enclosed_Fortress.png?5ac2d`,
        `https://minecraft.wiki/images/thumb/Blaze_Fortress.png/300px-Blaze_Fortress.png?80fad`,
      ],
    },
  ];

  await Biome.insertMany(biomes);
  console.log(
    `
    ========================================
    =+=+=+=[Biomes Have been Created]+=+=+=+
    ========================================
    `
  );
};

const run = async () => {
  await main();
  db.close();
};

run();
