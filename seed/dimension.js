const db = require(`../db`);

const { Biome, Dimension } = require(`../models`);

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
  await Dimension.deleteMany();

  // List of getting items from child (Biome)
  const netherWastes = await Biome.findOne({
    biomeName: `Nether Wastes`,
  });

  const crimsonForest = await Biome.findOne({
    biomeName: `Crimson Forest`,
  });

  const warpedForest = await Biome.findOne({
    biomeName: `Warped Forest`,
  });

  const theEnd = await Biome.findOne({
    biomeName: `The End (Biome)`,
  });

  const smallEndIslands = await Biome.findOne({
    biomeName: `Small End Islands`,
  });

  const endHighlands = await Biome.findOne({
    biomeName: `End Highlands`,
  });

  const cherryGrove = await Biome.findOne({
    biomeName: `Cherry Grove`,
  });

  const taiga = await Biome.findOne({
    biomeName: `Taiga Forest`,
  });

  const lushCaves = await Biome.findOne({
    biomeName: `Lush Caves`,
  });
  // Main Content
  const dimensions = [
    {
      dimensionName: `Overworld`,
      dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Overworld_1.18.png/revision/latest/scale-to-width-down/1000?cb=20211129031711`,
      dimensionBiomes: [cherryGrove._id, taiga._id, lushCaves._id],
    },
    {
      dimensionName: `The End`,
      dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/The_End.png/revision/latest/scale-to-width-down/1000?cb=20201019180500`,
      dimensionBiomes: [theEnd._id, smallEndIslands._id, endHighlands._id],
    },
    {
      dimensionName: `The Nether`,
      dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/11/Nether.png/revision/latest/scale-to-width-down/1000?cb=20211221091010`,
      dimensionBiomes: [netherWastes._id, crimsonForest._id, warpedForest._id],
    },
    // {
    //   "DimensionName": "The Aether",
    //   "dimensionImage":
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzn2SranPNjcvS_d31fFrlQwAvC6buX13JQ&s",
    //   "dimensionBiomes": ["testing._id", "notARealBiome._id"],
    // },
    // >--->---> The Aether is a mod dimension but again. This will be the example for CRUD :D
  ];

  await Dimension.insertMany(dimensions);
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
