const express = require(`express`);
const cors = require(`cors`);
const db = require(`./db`);
const minecraftController = require(`./controllers/minecraft-controller`);
const bodyParser = require(`body-parser`);
const logger = require(`morgan`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(logger(`dev`));
app.use(bodyParser.json());

app.get(`/`, (req, res) =>
  res.send(
    `Hello there! You've just arrived at the Minecraft DB. Please begin by <a href="http://localhost:3000/biomes">clicking me!</a>`
  )
);

app.get(`/biomes`, minecraftController.getAllBiomes);
app.get(`/dimensions`, minecraftController.getAllDimensions);
app.get(`/mobs`, minecraftController.getAllMobs);

app.get(`/biomes/:id`, minecraftController.getBiomeById);
app.get(`/dimensions/:id`, minecraftController.getDimensionById);
app.get(`/mobs/:id`, minecraftController.getMobById);

app.post(`/biomes`, minecraftController.createBiome);
app.post(`/dimensions`, minecraftController.createDimension);
app.post(`/mobs`, minecraftController.createMob);

app.put(`/biomes/:id`, minecraftController.updateBiome);
app.put(`/dimensions/:id`, minecraftController.updateDimension);
app.put(`/mobs/:id`, minecraftController.updateMob);

app.delete(`/biomes/:id`, minecraftController.deleteBiome);
app.delete(`/dimensions/:id`, minecraftController.deleteDimension);
app.delete(`/mobs/:id`, minecraftController.deleteMob);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
