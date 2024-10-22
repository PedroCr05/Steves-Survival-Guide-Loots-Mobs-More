const db = require(`../db`);
const { Biome, Dimension, Mob } = require(`../models`);
// const { StrongholdSS } = require(`../assets/stronghold-Screenshots/index`);

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

  const overworldDim = await Dimension.findOne({
    dimensionName: `Overworld`,
  });

  const endDim = await Dimension.findOne({
    dimensionName: `The End`,
  });

  const blaze = await Mob.findOne({
    mobName: `Blaze`,
  });

  const zombifiedPiglin = await Mob.findOne({
    mobName: `Zombified Piglin`,
  });

  const ghast = await Mob.findOne({
    mobName: `Ghast`,
  });

  const piglin = await Mob.findOne({
    mobName: `Piglin`,
  });

  const magmaCube = await Mob.findOne({
    mobName: `Magma Cube`,
  });

  const enderman = await Mob.findOne({
    mobName: `Enderman`,
  });

  const strider = await Mob.findOne({
    mobName: `Strider`,
  });

  const hoglin = await Mob.findOne({
    mobName: `Hoglin`,
  });

  const witherSkeleton = await Mob.findOne({
    mobName: `Wither Skeleton`,
  });

  const piglinBrute = await Mob.findOne({
    mobName: `Piglin Brute`,
  });

  const shulker = await Mob.findOne({
    mobName: `Shulker`,
  });

  const allay = await Mob.findOne({
    mobName: `Allay`,
  });

  const ironGolem = await Mob.findOne({
    mobName: `Iron Golem`,
  });

  const pillager = await Mob.findOne({
    mobName: `Pillager`,
  });

  const creeper = await Mob.findOne({
    mobName: `Creeper`,
  });

  const slime = await Mob.findOne({
    mobName: `Slime`,
  });

  const spider = await Mob.findOne({
    mobName: `Spider`,
  });

  const zombie = await Mob.findOne({
    mobName: `Zombie`,
  });

  const witch = await Mob.findOne({
    mobName: `Witch`,
  });

  const zombieVillager = await Mob.findOne({
    mobName: `Zombie Villager`,
  });

  const bat = await Mob.findOne({
    mobName: `Bat`,
  });

  const rabbit = await Mob.findOne({
    mobName: `Rabbit`,
  });

  const sheep = await Mob.findOne({
    mobName: `Sheep`,
  });

  const pig = await Mob.findOne({
    mobName: `Pig`,
  });

  const glowSquid = await Mob.findOne({
    mobName: `Glow Squid`,
  });

  const cow = await Mob.findOne({
    mobName: `Cow`,
  });

  const fox = await Mob.findOne({
    mobName: `Fox`,
  });

  const ashenWolf = await Mob.findOne({
    mobName: `Wolf`,
  });

  const cat = await Mob.findOne({
    mobName: `Cat`,
  });

  const villager = await Mob.findOne({
    mobName: `Villager`,
  });

  const armorStands = await Mob.findOne({
    mobName: `Armor Stand`,
  });

  const camel = await Mob.findOne({
    mobName: `Camel`,
  });

  const horse = await Mob.findOne({
    mobName: `Horse`,
  });

  const chicken = await Mob.findOne({
    mobName: `Chicken`,
  });

  const Evoker = await Mob.findOne({
    mobName: `Evoker`,
  });

  const illusioner = await Mob.findOne({
    mobName: `Illusioner`,
  });

  const ravager = await Mob.findOne({
    mobName: `Ravager`,
  });

  const vex = await Mob.findOne({
    mobName: `Vex`,
  });

  const vindicator = await Mob.findOne({
    mobName: `Vindicator`,
  });

  const tropicalFish = await Mob.findOne({
    mobName: `Tropical Fish`,
  });

  const axolotl = await Mob.find({
    mobName: `Axolotl`,
  });

  const silverfish = await Mob.find({
    mobName: `Silverfish`,
  });
  // Main Content
  const biomes = [
    {
      biomeName: `Nether Wastes`,
      biomeImage: `https://minecraft.wiki/images/thumb/Nether_Fortress.png/250px-Nether_Fortress.png?999c7`,
      dimensionBiomeBelongsTo: netherDim._id,
      biomeMobs: [
        blaze._id,
        zombifiedPiglin._id,
        ghast._id,
        piglin._id,
        magmaCube._id,
        enderman._id,
        strider._id,
        // skeleton._id,
        // >--->---> Skeleton here sill be the CRUD example :D
        witherSkeleton._id,
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
    {
      biomeName: `Crimson Forest`,
      biomeImage: `https://minecraft.wiki/images/thumb/Crimson_Forest.png/250px-Crimson_Forest.png?d15b9`,
      dimensionBiomeBelongsTo: netherDim._id,
      biomeMobs: [
        zombifiedPiglin._id,
        hoglin._id,
        piglin._id,
        strider._id,
        piglinBrute._id,
      ],
      biomeStructureName: `Bastion Remnant`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/thumb/Bastion_Remnant_1.png/250px-Bastion_Remnant_1.png?f2896`,
        `https://minecraft.wiki/images/thumb/Bastion_Remnant_2.png/800px-Bastion_Remnant_2.png?fbeb6`,
        `https://minecraft.wiki/images/thumb/Bastion_Remnant_3.png/800px-Bastion_Remnant_3.png?e2d01`,
        `https://minecraft.wiki/images/thumb/Bastion_Remnant_4.png/1024px-Bastion_Remnant_4.png?f1c39`,
      ],
    },
    {
      biomeName: `Warped Forest`,
      biomeImage: `https://minecraft.wiki/images/thumb/Warped_Forest.png/250px-Warped_Forest.png?782e4`,
      dimension: netherDim._id,
      biomeMobs: [enderman._id, strider._id],
      biomeStructureName: `Ruined Portal`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/thumb/Nether_portal_1.png/250px-Nether_portal_1.png?c4674`,
        `https://minecraft.wiki/images/thumb/Nether_Giant_portal_1.png/250px-Nether_Giant_portal_1.png?e8230`,
        `https://minecraft.wiki/images/thumb/Nether_Giant_portal_1.png/800px-Nether_Giant_portal_1.png?e8230`,
        `https://minecraft.wiki/images/thumb/Nether_Giant_portal_2.png/800px-Nether_Giant_portal_2.png?9f3e0`,
        `https://minecraft.wiki/images/thumb/Nether_Giant_portal_3.png/1024px-Nether_Giant_portal_3.png?74704`,
        `https://minecraft.wiki/images/Nether_portal_1.png?c4674`,
        `https://minecraft.wiki/images/thumb/Nether_portal_2.png/800px-Nether_portal_2.png?5c33b`,
        `https://minecraft.wiki/images/thumb/Nether_portal_3.png/1024px-Nether_portal_3.png?868d3`,
        `https://minecraft.wiki/images/thumb/Nether_portal_4.png/1024px-Nether_portal_4.png?b13e8`,
        `https://minecraft.wiki/images/thumb/Nether_portal_5.png/1024px-Nether_portal_5.png?eab38`,
        `https://minecraft.wiki/images/Nether_portal_6.png?1921d`,
        `https://minecraft.wiki/images/Nether_portal_7.png?e9811`,
        `https://minecraft.wiki/images/thumb/Nether_portal_8.png/1280px-Nether_portal_8.png?ed453`,
        `https://minecraft.wiki/images/Nether_portal_9.png?e121b`,
        `https://minecraft.wiki/images/thumb/Nether_portal_10.png/200px-Nether_portal_10.png?95558`,
      ],
    },
    {
      biomeName: `The End (Biome)`,
      biomeImage: `https://minecraft.wiki/images/thumb/The_End.png/250px-The_End.png?cc597`,
      dimension: endDim._id,
      biomeMobs: enderman._id,
    },
    {
      biomeName: `Small End Islands`,
      biomeImage: `https://minecraft.wiki/images/thumb/Small_End_Islands.png/250px-Small_End_Islands.png?20554`,
      dimension: endDim._id,
      biomeMobs: enderman._id,
    },
    {
      biomeName: `End Highlands`,
      biomeImage: `https://minecraft.wiki/images/End_Highlands.png?b5640`,
      dimension: endDim._id,
      biomeMobs: [enderman._id, shulker._id],
      biomeStructureName: `End City`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/EndCityEntrance.png?ea03f`,
        `https://minecraft.wiki/images/End_Ship.png?0a8d7`,
        `https://minecraft.wiki/images/thumb/End_city_base_floor.png/1280px-End_city_base_floor.png?299cd`,
        `https://minecraft.wiki/images/thumb/End_city_base_roof.png/1920px-End_city_base_roof.png?a133b`,
        `https://minecraft.wiki/images/End_city_bridge_end.png?d6a8b`,
        `https://minecraft.wiki/images/thumb/End_city_bridge_gentle_stairs.png/1024px-End_city_bridge_gentle_stairs.png?49595`,
        `https://minecraft.wiki/images/End_city_bridge_piece.png?7dbf3`,
        `https://minecraft.wiki/images/thumb/End_city_bridge_steep_stairs.png/800px-End_city_bridge_steep_stairs.png?519b9`,
        `https://minecraft.wiki/images/thumb/End_city_fat_tower_base.png/1280px-End_city_fat_tower_base.png?2d72e`,
        `https://minecraft.wiki/images/thumb/End_city_fat_tower_middle.png/1024px-End_city_fat_tower_middle.png?6c48c`,
        `https://minecraft.wiki/images/thumb/End_city_fat_tower_top.png/1920px-End_city_fat_tower_top.png?0dbf6`,
        `https://minecraft.wiki/images/thumb/End_city_second_floor_1.png/1920px-End_city_second_floor_1.png?ab7df`,
        `https://minecraft.wiki/images/thumb/End_city_second_floor_2.png/1920px-End_city_second_floor_2.png?0f0ae`,
        `https://minecraft.wiki/images/thumb/End_city_second_roof.png/1920px-End_city_second_roof.png?56ad6`,
        `https://minecraft.wiki/images/thumb/End_city_third_floor_1.png/1920px-End_city_third_floor_1.png?35f01`,
        `https://minecraft.wiki/images/thumb/End_city_third_floor_2.png/1920px-End_city_third_floor_2.png?82491`,
        `https://minecraft.wiki/images/thumb/End_city_third_roof.png/1920px-End_city_third_roof.png?4508e`,
        `https://minecraft.wiki/images/thumb/End_city_tower_base.png/1280px-End_city_tower_base.png?dba3c`,
        `https://minecraft.wiki/images/End_city_tower_floor.png?6977f`,
        `https://minecraft.wiki/images/End_city_tower_piece.png?d7c61`,
        `https://minecraft.wiki/images/thumb/End_city_tower_top.png/1280px-End_city_tower_top.png?1a9e1`,
      ],
    },
    {
      biomeName: `Cherry Grove`,
      biomeImage: `https://minecraft.wiki/images/thumb/Cherry_Grove.png/250px-Cherry_Grove.png?9e30e`,
      dimension: overworldDim._id,
      biomeMobs: [
        creeper._id,
        // skeleton._id,
        slime._id,
        spider._id,
        zombie._id,
        enderman._id,
        witch._id,
        zombieVillager._id,
        bat._id,
        rabbit._id,
        sheep._id,
        pig._id,
        glowSquid._id,
        allay._id,
        ironGolem._id,
        pillager._id,
      ],
      biomeStructureName: `Pillager Outpost`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/thumb/Pillager_Outpost.png/250px-Pillager_Outpost.png?f2636`,
        `https://minecraft.wiki/images/Pillager_outpost_feature_cage1.png?40743`,
        `https://minecraft.wiki/images/Pillager_outpost_feature_logs.png?c13f1`,
        `https://minecraft.wiki/images/Pillager_outpost_feature_targets.png?06b02`,
        `https://minecraft.wiki/images/Pillager_outpost_feature_tent1.png?76bd9`,
        `https://minecraft.wiki/images/Pillager_outpost_feature_tent2.png?aec03`,
      ],
    },
    {
      biomeName: `Taiga Forest`,
      biomeImage: `https://minecraft.wiki/images/thumb/Taiga.png/250px-Taiga.png?a3b2c`,
      dimension: overworldDim._id,
      biomeMobs: [
        creeper._id,
        // skeleton._id,
        slime._id,
        spider._id,
        zombie._id,
        enderman._id,
        witch._id,
        zombieVillager._id,
        bat._id,
        sheep._id,
        pig._id,
        cow._id,
        fox._id,
        ashenWolf._id,
        rabbit._id,
        glowSquid._id,
        ironGolem._id,
        cat._id,
        villager._id,
        armorStands._id,
        camel._id,
        horse._id,
        chicken._id,
        Evoker._id,
        illusioner._id,
        pillager._id,
        ravager._id,
        vex._id,
        vindicator._id,
      ],
      biomeStructureName: `Taiga Village`,
      biomeStructureImages: [
        `https://minecraft.wiki/images/thumb/Taiga_Small_House_3.png/250px-Taiga_Small_House_3.png?a786f`,
        `https://minecraft.wiki/images/thumb/Taiga_Village_1_14_1.png/300px-Taiga_Village_1_14_1.png?34f07`,
      ],
    },
    {
      biomeName: `Lush Caves`,
      biomeImage: `https://minecraft.wiki/images/thumb/Lush_Cave.png/250px-Lush_Cave.png?9e9d2`,
      dimensionBiomeBelongsTo: overworldDim._id,
      biomeMobs: [
        creeper._id,
        // skeleton._id,
        slime._id,
        spider._id,
        zombie._id,
        enderman._id,
        witch._id,
        zombieVillager._id,
        glowSquid._id,
        tropicalFish._id,
        axolotl._id,
        silverfish._id,
      ],
      biomeStructureName: `Stronghold`,
      // biomeStructureImages: [StrongholdSS],
    },
    // {
    //   "biomeName": "Testing",
    //   "biomeImage": "",
    //   "dimensionBiomeBelongsTo": "aetherDim._id",
    //   "biomeMobs": ["skeleton._id", "player._id"],
    //   "biomeStructureName": "",
    //   "biomeStructureImages": ""
    // },
    // {
    //   "biomeName": "Not a Real Biome",
    //   "biomeImage": "",
    //   "dimensionBiomeBelongsTo": "aetherDim._id",
    //   "biomeMobs": ["skeleton._id", "player._id"],
    //   "biomeStructureName": "",
    //   "biomeStructureImages": ""
    // }
    // >--->---> Two biomes that will be used for an example for CRUD :D
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
