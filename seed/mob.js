const db = require(`../db`);

const { Mob, Biome } = require(`../models`);

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
  await Mob.deleteMany();

  const blazeSpawns = await Biome.findOne({
    biomeName: `Nether Wastes`,
  });

  const mobs = [
    {
      mobName: `Blaze`,
      mobImage: `https://minecraft.wiki/images/thumb/Blaze.gif/150px-Blaze.gif?29f6f`,
      biomeMobBelongsTo: blazeSpawns._id,
      isMobHostile: true,
      mobTotalHitPoints: 20,
    },
  ];
  await Mob.insertMany(mobs);
  console.log(
    `
    ========================================
    =+=+=+=+[Mobs Have been Created]=+=+=+=+
    ========================================
    `
  );
};

const run = async () => {
  await main();
  db.close();
};

run();
