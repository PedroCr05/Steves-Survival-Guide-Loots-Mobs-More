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

  const netherWasteSpawns = await Biome.findOne({
    biomeName: `Nether Wastes`,
  });

  const netherCrimsonForestSpawns = await Biome.findOne({
    biomeName: `Crimson Forest`,
  });

  const netherWarpedForestSpawns = await Biome.findOne({
    biomeName: `Warped Forest`,
  });

  const overworldCherryGroveSpawns = await Biome.findOne({
    biomeName: `Cherry Grove`,
  });

  const theEndBiomeSpawns = await Biome.findOne({
    biomeName: `The End (Biome)`,
  });

  const smallEndIslandsSpawns = await Biome.findOne({
    biomeName: `Small End Islands`,
  });

  const endHighlandsSpawns = await Biome.findOne({
    biomeName: `End Highlands`,
  });

  const overworldTaigaForestSpawns = await Biome.findOne({
    biomeName: `Taiga Forest`,
  });

  const overworldLushCavesSpawns = await Biome.findOne({
    biomeName: `Lush Caves`,
  });

  const mobs = [
    // ---------[Pure Hostile]---------
    {
      mobName: `Zombie Villager`,
      mobImage: `https://minecraft.wiki/images/thumb/Plains_Zombie_Villager_Base.png/150px-Plains_Zombie_Villager_Base.png?7882a`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldLushCavesSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Blaze`,
      mobImage: `https://minecraft.wiki/images/thumb/Blaze.gif/150px-Blaze.gif?29f6f`,
      biomeMobBelongsTo: [netherWasteSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Ghast`,
      mobImage: `https://minecraft.wiki/images/thumb/Ghast_JE2_BE2.gif/220px-Ghast_JE2_BE2.gif?b2699`,
      biomeMobBelongsTo: [netherWasteSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Magma Cube`,
      mobImage: `https://minecraft.wiki/images/thumb/Magma_Cube_JE2_BE2.png/150px-Magma_Cube_JE2_BE2.png?b4389`,
      biomeMobBelongsTo: [netherWasteSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 16,
    },
    {
      mobName: `Hoglin`,
      mobImage: `https://minecraft.wiki/images/thumb/Hoglin_JE3.png/150px-Hoglin_JE3.png?65eaa`,
      biomeMobBelongsTo: [netherWasteSpawns._id, netherCrimsonForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 40,
    },
    {
      mobName: `Creeper`,
      mobImage: `https://minecraft.wiki/images/Creeper_JE2_BE1.png?cc54b`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Slime`,
      mobImage: `https://minecraft.wiki/images/thumb/Slime_JE3_BE2.png/150px-Slime_JE3_BE2.png?5b6a7`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 16,
    },
    {
      mobName: `Spider`,
      mobImage: `https://minecraft.wiki/images/thumb/Spider_JE5_BE4.png/150px-Spider_JE5_BE4.png?b090e`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: true,
      mobTotalHitPoints: 16,
    },
    {
      mobName: `Zombie`,
      mobImage: `https://minecraft.wiki/images/thumb/Zombie_JE3_BE2.png/100px-Zombie_JE3_BE2.png?228b5`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    // ---------[Half Passive | Half Hostile]---------
    // {
    //   "mobName": "Skeleton",
    //   "mobImage":
    //     "https://minecraft.wiki/images/thumb/Skeleton_JE6_BE4.png/100px-Skeleton_JE6_BE4.png?85786",
    //   "biomeMobBelongsTo": ["testing._id", "biomeDoesNotExist._id"],
    //   "isMobHostile": "true",
    //   "isMobNeutral": "false",
    //   "mobTotalHitPoints": "20"
    // },
    // >--->---> Skeleton here sill be the CRUD example :D
    {
      mobName: `Wither Skeleton`,
      mobImage: `https://minecraft.wiki/images/thumb/Wither_Skeleton_JE4_BE3.png/150px-Wither_Skeleton_JE4_BE3.png?9c107`,
      biomeMobBelongsTo: [netherWasteSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Piglin Brute`,
      mobImage: `https://minecraft.wiki/images/thumb/Piglin_Brute.png/150px-Piglin_Brute.png?5d4a0`,
      biomeMobBelongsTo: [netherWasteSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 50,
    },
    // {
    //   "mobName": "Shonnairn",
    //   "mobImage": "",
    //   "biomeMobBelongsTo": ["biomeDoesNotExist._id", "testing._id"],
    //   "isMobHostile": "true",
    //   "isMobNeutral": "true",
    //   "mobTotalHitPoints": "999999999999"
    // },
    // >--->---> Player here will be used for a CRUD example. P.S. Ignore the HP :b
    {
      mobName: `Enderman`,
      mobImage: `https://minecraft.wiki/images/thumb/Enderman.png/150px-Enderman.png?b99b5`,
      biomeMobBelongsTo: [
        netherWarpedForestSpawns._id,
        theEndBiomeSpawns._id,
        smallEndIslandsSpawns._id,
        endHighlandsSpawns._id,
        overworldCherryGroveSpawns._id,
        overworldLushCavesSpawns._id,
        overworldTaigaForestSpawns._id,
        netherWasteSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 40,
    },
    {
      mobName: `Zombified Piglin`,
      mobImage: `https://minecraft.wiki/images/thumb/Zombified_Piglin_JE9.png/150px-Zombified_Piglin_JE9.png?b91da`,
      biomeMobBelongsTo: [netherWasteSpawns._id, netherCrimsonForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: true,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Piglin`,
      mobImage: `https://minecraft.wiki/images/thumb/Piglin.png/150px-Piglin.png?a498e`,
      biomeMobBelongsTo: [netherWasteSpawns._id, netherCrimsonForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: true,
      mobTotalHitPoints: 16,
    },
    {
      mobName: `Iron Golem`,
      mobImage: `https://minecraft.wiki/images/thumb/Iron_Golem_JE2_BE2.png/150px-Iron_Golem_JE2_BE2.png?2cd73`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: true,
      mobTotalHitPoints: 100,
    },
    // ---------[Pure Passive]---------
    {
      mobName: `Strider`,
      mobImage: `https://minecraft.wiki/images/thumb/Strider_JE2_BE2.gif/150px-Strider_JE2_BE2.gif?f8244`,
      biomeMobBelongsTo: [
        netherWasteSpawns._id,
        netherCrimsonForestSpawns._id,
        netherWarpedForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Allay`,
      mobImage: `https://minecraft.wiki/images/Allay_JE2.gif?aca63`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Villager`,
      mobImage: `https://minecraft.wiki/images/thumb/Plains_Villager_Base_JE2.png/181px-Plains_Villager_Base_JE2.png?a2fcc`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Bat`,
      mobImage: `https://minecraft.wiki/images/thumb/Bat_JE4_BE3.gif/150px-Bat_JE4_BE3.gif?db68c`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 6,
    },
    {
      mobName: `Rabbit`,
      mobImage: `https://minecraft.wiki/images/thumb/Salt_%26_Pepper_Rabbit_JE2_BE2.png/150px-Salt_%26_Pepper_Rabbit_JE2_BE2.png?599ad`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 3,
    },
    {
      mobName: `Sheep`,
      mobImage: `https://minecraft.wiki/images/thumb/White_Sheep_JE3_BE6.png/150px-White_Sheep_JE3_BE6.png?6a7ae`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 8,
    },
    {
      mobName: `Pig`,
      mobImage: `https://minecraft.wiki/images/thumb/Pig_JE3_BE2.png/150px-Pig_JE3_BE2.png?a2e09`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Glow Squid`,
      mobImage: `https://minecraft.wiki/images/thumb/Glow_Squid_JE1.gif/150px-Glow_Squid_JE1.gif?dcad8`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Cow`,
      mobImage: `https://minecraft.wiki/images/thumb/Cow_JE5_BE2.png/150px-Cow_JE5_BE2.png?1068b`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Fox`,
      mobImage: `https://minecraft.wiki/images/thumb/Fox.png/150px-Fox.png?ebd36`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: true,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Wolf`,
      mobImage: `https://minecraft.wiki/images/thumb/Ashen_Wolf_JE1_BE1.png/150px-Ashen_Wolf_JE1_BE1.png?83aab`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: true,
      mobTotalHitPoints: 40,
    },
    {
      mobName: `Cat`,
      mobImage: `https://minecraft.wiki/images/thumb/Jellie_Cat.png/150px-Jellie_Cat.png?e5d99`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Chicken`,
      mobImage: `https://minecraft.wiki/images/thumb/Chicken_JE2_BE2.png/150px-Chicken_JE2_BE2.png?30245`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 10,
    },
    {
      mobName: `Evoker`,
      mobImage: `https://minecraft.wiki/images/thumb/Evoker_JE3.png/150px-Evoker_JE3.png?54321`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 24,
    },
    {
      mobName: `Illusioner`,
      mobImage: `https://minecraft.wiki/images/thumb/Illusioner_JE3.png/150px-Illusioner_JE3.png?4414c`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 32,
    },
    {
      mobName: `Ravager`,
      mobImage: `https://minecraft.wiki/images/thumb/Ravager_JE1.png/150px-Ravager_JE1.png?55aae`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 100,
    },
    {
      mobName: `Vex`,
      mobImage: `https://minecraft.wiki/images/thumb/Vex_JE4.gif/150px-Vex_JE4.gif?da166`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 14,
    },
    {
      mobName: `Armor Stand`,
      mobImage: `https://minecraft.wiki/images/thumb/Armor_Stand_JE5.png/150px-Armor_Stand_JE5.png?d662f`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 20,
    },
    {
      mobName: `Vindicator`,
      mobImage: `https://minecraft.wiki/images/thumb/Vindicator_JE4.png/150px-Vindicator_JE4.png?48924`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 24,
    },
    {
      mobName: `Camel`,
      mobImage: `https://minecraft.wiki/images/thumb/Armor_Stand_JE5.png/150px-Armor_Stand_JE5.png?d662f`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 32,
    },
    {
      mobName: `Horse`,
      mobImage: `https://minecraft.wiki/images/thumb/White_Horse.png/150px-White_Horse.png?0cc9a`,
      biomeMobBelongsTo: [overworldTaigaForestSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 15,
    },
    {
      mobName: `Tropical Fish`,
      mobImage: `https://minecraft.wiki/images/thumb/Clownfish.png/150px-Clownfish.png?1b6b5`,
      biomeMobBelongsTo: [overworldLushCavesSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 3,
    },
    {
      mobName: `Axolotl`,
      mobImage: `https://minecraft.wiki/images/thumb/Blue_Axolotl_JE2.gif/150px-Blue_Axolotl_JE2.gif?24246`,
      biomeMobBelongsTo: [overworldLushCavesSpawns._id],
      isMobHostile: false,
      isMobNeutral: false,
      mobTotalHitPoints: 14,
    },
    {
      mobName: `Silverfish`,
      mobImage: `https://minecraft.wiki/images/thumb/Silverfish_JE1_BE1.gif/200px-Silverfish_JE1_BE1.gif?d40a7`,
      biomeMobBelongsTo: [overworldLushCavesSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 16,
    },
    {
      mobName: `Shulker`,
      mobImage: `https://minecraft.wiki/images/thumb/Shulker.png/150px-Shulker.png?02a87`,
      biomeMobBelongsTo: [endHighlandsSpawns._id],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 30,
    },
    {
      mobName: `Witch`,
      mobImage: `https://minecraft.wiki/images/thumb/Witch.png/100px-Witch.png?aeb30`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
        overworldLushCavesSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 26,
    },
    {
      mobName: `Pillager`,
      mobImage: `https://minecraft.wiki/images/thumb/Pillager_JE3.png/150px-Pillager_JE3.png?22662`,
      biomeMobBelongsTo: [
        overworldCherryGroveSpawns._id,
        overworldTaigaForestSpawns._id,
      ],
      isMobHostile: true,
      isMobNeutral: false,
      mobTotalHitPoints: 24,
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
