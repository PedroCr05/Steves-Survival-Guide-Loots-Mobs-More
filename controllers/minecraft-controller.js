const { Biome, Dimension, Mob } = require(`../models`);

const getAllBiomes = async (req, res) => {
  try {
    const biomes = await Biome.find({});
    res.json(biomes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAllDimensions = async (req, res) => {
  try {
    const dimensions = await Dimension.find({});
    res.json(dimensions);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAllMobs = async (req, res) => {
  try {
    const mobs = await Mob.find({});
    res.json(mobs);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getBiomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const biome = await Biome.findById(id);
    if (biome) {
      return res.json(biome);
    }
    return res.status(404).send(`That biome does not exist. Sorry!`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res.status(404).send(`That biome does not exist. Sorry!`);
    }
    return res.status(500).send(e.message);
  }
};

const getDimensionById = async (req, res) => {
  try {
    const { id } = req.params;
    const dimension = await Dimension.findById(id);
    if (dimension) {
      return res.json(dimension);
    }
    return res
      .status(404)
      .send(
        `That dimension is not in out Data Base. Please enter a valid dimension.`
      );
  } catch (e) {
    if (e.name === `CastError` && e.king === `ObjectId`)
      return res
        .status(404)
        .send(
          `That dimension is not in out Data Base. Please enter a valid dimension.`
        );
  }
};

const getMobById = async (req, res) => {
  try {
    const { id } = req.params;
    const mob = await Mob.findById(id);
    if (mob) {
      return res.json(mob);
    }
    return res
      .status(404)
      .send(
        `The mob you entered does not exist. Please enter a valid ID or create a new ID.`
      );
  } catch (e) {
    if (e.name === `CastError` && e.king === `ObjectId`)
      return res
        .status(404)
        .send(
          `The mob you entered does not exist. Please enter a valid ID or create a new ID.`
        );
  }
};

const createBiome = async (req, res) => {
  try {
    const biome = await new Biome(req.body);
    await biome.save();
    return res.status(201).json({
      biome,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createDimension = async (req, res) => {
  try {
    const dimension = await new Dimension(req.body);
    await dimension.save();
    return res.status(201).json({
      dimension,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createMob = async (req, res) => {
  try {
    const mob = await new Mob(req.body);
    await mob.save();
    return res.status(201).json({
      mob,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateBiome = async (req, res) => {
  try {
    let { id } = req.params;
    let biome = await Biome.findByIdAndUpdate(id, req.body, { new: true });
    if (biome) {
      return res.status(200).json(biome);
    }
    throw new Error(
      `The Biome you tried to update failed. Please enter a valid ID.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateDimension = async (req, res) => {
  try {
    let { id } = req.params;
    let dimension = await Dimension.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (dimension) {
      return res.status(200).json(dimension);
    }
    throw new Error(
      `The Dimension you tried to update failed. Please enter a valid ID.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateMob = async (req, res) => {
  try {
    let { id } = req.params;
    let mob = await Mob.findByIdAndUpdate(id, req.body, { new: true });
    if (mob) {
      return res.status(200).json(mob);
    }
    throw new Error(
      `The Mob you tried to update failed. Please enter a valid ID.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteBiome = async (req, res) => {
  try {
    const { id } = req.params;
    const biomeDeleted = await Biome.findByIdAndDelete(id);
    if (biomeDeleted) {
      return res.status(200).send(`The Biome you selected has been deleted!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteDimension = async (req, res) => {
  try {
    const { id } = req.params;
    const dimensionDeleted = await Dimension.findByIdAndDelete(id);
    if (dimensionDeleted) {
      return res
        .status(200)
        .send(`The Dimension you selected has been deleted!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteMob = async (req, res) => {
  try {
    const { id } = req.params;
    const mobDeleted = await Mob.findByIdAndDelete(id);
    if (mobDeleted) {
      return res.status(200).send(`The Mob you selected has been deleted!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllBiomes,
  getAllDimensions,
  getAllMobs,
  getBiomeById,
  getDimensionById,
  getMobById,
  createBiome,
  createDimension,
  createMob,
  updateBiome,
  updateDimension,
  updateMob,
  deleteBiome,
  deleteDimension,
  deleteMob,
};
