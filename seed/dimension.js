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

  // Main Content
  const dimensions = [
    // {
    //   dimensionName: `Overworld`,
    //   dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Overworld_1.18.png/revision/latest/scale-to-width-down/1000?cb=20211129031711`,
    //   dimensionBiomes: [
    //     deepOcean._id,
    //     warmOcean._id,
    //     lukewarmOcean._id,
    //     deepLukewarmOcean._id,
    //     coldOcean._id,
    //     deepColdOcean._id,
    //     frozenOcean._id,
    //     deepFrozenOcean._id,
    //     mushroomFields._id,
    //     jaggedPeaks._id,
    //     frozenPeaks._id,
    //     stonyPeaks._id,
    //     meadow._id,
    //     cherryGrove._id,
    //     grove._id,
    //     snowySlopes._id,
    //     windsweptHills._id,
    //     windsweptGravellyHills._id,
    //     windsweptForest._id,
    //     forest._id,
    //     flowerForest._id,
    //     taiga._id,
    //     oldGrowthPineTaiga._id,
    //     oldGrowthSpruceTaiga._id,
    //     snowyTaiga._id,
    //     birchForest._id,
    //     oldGrowthBirchForest._id,
    //     darkForest._id,
    //     jungle._id,
    //     sparseJungle._id,
    //     bambooJungle._id,
    //     paleGarden._id,
    //     river._id,
    //     frozenRiver._id,
    //     swamp._id,
    //     mangroveSwamp._id,
    //     beach._id,
    //     snowyBeach._id,
    //     stonyShore._id,
    //     plains._id,
    //     sunflowerPlains._id,
    //     snowyPlains._id,
    //     iceSpikes._id,
    //     desert._id,
    //     savanna._id,
    //     savannaPlateau._id,
    //     windsweptSavanna._id,
    //     badlands._id,
    //     woodedBadlands._id,
    //     erodedBadlands._id,
    //     deepDark._id,
    //     dripStoneCaves._id,
    //     lushCaves._id,
    //   ],
    // },
    // {
    //   dimensionName: `The End`,
    //   dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/The_End.png/revision/latest/scale-to-width-down/1000?cb=20201019180500`,
    //   dimensionBiomes: [
    //     theEnd._id,
    //     smallEndIslands._id,
    //     endMidlands._id,
    //     endHighlands._id,
    //     endBarrens._id,
    //   ],
    // },
    {
      dimensionName: `The Nether`,
      dimensionImage: `https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/11/Nether.png/revision/latest/scale-to-width-down/1000?cb=20211221091010`,
      dimensionBiomes: [
        netherWastes._id,
        // crimsonForest._id,
        // WarpedForest._id,
        // soulSandValley._id,
        // basaltDeltas._id,
      ],
    },
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
