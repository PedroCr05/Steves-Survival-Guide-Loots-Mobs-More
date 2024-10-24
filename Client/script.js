const biomeSearchHandle = document.querySelector(`#biome`);
const biomeSearchBttn = document.querySelector(`#biome-submit`);
const dimensionSearchHandle = document.querySelector(`#dimension`);
const dimensionSearchBttn = document.querySelector(`#dimension-submit`);
const mobSearchHandle = document.querySelector(`#mob`);
const mobSearchBttn = document.querySelector(`#mob-submit`);
const objInfo = document.querySelector(`#item-text`);
const objRelations = document.querySelector(`#item-relations`);
const objImg = document.querySelector(`#item-img`);

// function searchHandleInput() {
//   const inputCheck = document.activeElement;

//   if (
//     inputCheck === biomeSearchHandle ||
//     inputCheck === dimensionSearchHandle ||
//     inputCheck === mobSearchHandle
//   ) {
//     return inputCheck.value.toLowerCase();
//   } else {
//     return ``;
//   }
// }

biomeSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = biomeSearchHandle.value.toLowerCase();

  const fetchBiomes = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/biomes`);
      console.log(res.data);
      const biomes = res.data;

      const matchingBiome = biomes.find(
        (biomes) => biomes.biomeName.toLowerCase() === searchHandleInput
      );

      if (matchingBiome) {
        objInfo.textContent = `Biome: ${matchingBiome.biomeName}`;
        objRelations.textContent = `Dimension: ${matchingBiome.dimensionBiomeBelongsTo}`;

        const addingMobs = objRelations.appendChild(
          document.createElement(`p`)
        );
        addingMobs.className = `mob-list`;
        addingMobs.textContent = matchingBiome.biomeMobs;

        objImg.src = matchingBiome.biomeImage;
      } else {
        objInfo.textContent = `404 Error | Biome not found.`;
        objRelations.textContent = ``;
        objImg.src = ``;
      }
    } catch (e) {
      console.error(`404 Error | Could not get Biomes:`, e);
    }
  };

  fetchBiomes();
});

dimensionSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = dimensionSearchHandle.value.toLowerCase();

  const fetchDimensions = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/dimensions`);
      console.log(res.data);
      const dimensions = res.data;

      const matchingDimension = dimensions.find(
        (dimension) =>
          dimension.dimensionName.toLowerCase() === searchHandleInput
      );

      if (matchingDimension) {
        objInfo.textContent = `Dimension: ${matchingDimension.dimensionName}`;
        objRelations.textContent = `Biomes: ${matchingDimension.dimensionBiomes.join(
          `, `
        )}`;
        objImg.src = matchingDimension.dimensionImage;
      } else {
        objInfo.textContent = `404 Error | Dimension not found.`;
        objRelations.textContent = ``;
        objImg.src = ``;
      }
    } catch (e) {
      console.error(`404 Error | Could not get Dimensions:`, e);
    }
  };

  fetchDimensions();
});

mobSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = mobSearchHandle.value.toLowerCase();

  const fetchMobs = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/mobs`);
      console.log(res.data);
      const mobs = res.data;

      const matchingMob = mobs.find(
        (mob) => mob.mobName.toLowerCase() === searchHandleInput
      );

      if (matchingMob) {
        objInfo.textContent = `Mob: ${matchingMob.mobName}`;
        objRelations.textContent = `Biomes: ${matchingMob.biomeMobBelongsTo}`;
        objImg.src = matchingMob.mobImage;
      } else {
        objInfo.textContent = `404 Error | Mob not found.`;
        (objRelations.textContent = ``), (objImg.src = ``);
      }
    } catch (e) {
      console.log(`404 Error | Could not get Mobs:`, e);
    }
  };
  fetchMobs();
});
