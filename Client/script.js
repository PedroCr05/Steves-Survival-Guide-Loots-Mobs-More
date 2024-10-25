const biomeSearchHandle = document.querySelector(`#biome`);
const biomeSearchBttn = document.querySelector(`#biome-submit`);
const dimensionSearchHandle = document.querySelector(`#dimension`);
const dimensionSearchBttn = document.querySelector(`#dimension-submit`);
const mobSearchHandle = document.querySelector(`#mob`);
const mobSearchBttn = document.querySelector(`#mob-submit`);
const objInfo = document.querySelector(`#item-text`);
const objRelations = document.querySelector(`#item-relations`);
const objImg = document.querySelector(`#item-img`);
const changeOpacity = document.querySelector(`.image-itself`);

let classIncrements = 1;

biomeSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = biomeSearchHandle.value.toLowerCase();
  objRelations.innerHTML = "";

  try {
    const res = await axios.get(`http://localhost:3000/biomes`);
    const matchingBiome = res.data.find(
      (biome) => biome.biomeName.toLowerCase() === searchHandleInput
    );

    if (matchingBiome) {
      console.log(matchingBiome);

      objImg.src = matchingBiome.biomeImage;
      changeOpacity.style.opacity = 1;

      const biomeHeader = document.createElement(`h1`);
      biomeHeader.className = `biome-h1`;
      biomeHeader.textContent = `Biome:`;
      objInfo.appendChild(biomeHeader);

      const biomeName = document.createElement(`h2`);
      biomeName.className = `name-of-biome`;
      biomeName.textContent = matchingBiome.biomeName;
      objInfo.appendChild(biomeName);

      const header = document.createElement(`h2`);
      header.className = `relations-h2`;
      header.textContent = `More information about the biome:`;
      objRelations.appendChild(header);

      const mobHeader = document.createElement(`h3`);
      mobHeader.className = `mob-h3`;
      mobHeader.textContent = `Mobs in this Biome:`;
      objRelations.appendChild(mobHeader);

      matchingBiome.biomeMobs.forEach((biomeSeed) => {
        const fetchedData = document.createElement(`p`);
        fetchedData.className = `mobName counter-${classIncrements}`;
        classIncrements++;
        fetchedData.textContent = biomeSeed.mobName;
        objRelations.appendChild(fetchedData);
      });
    } else {
      objInfo.textContent = `404 Error | Biome not found.`;
      objImg.src = ``;
    }
    classIncrements = 0;
  } catch (e) {
    console.error(`Error | Could not get Biomes:`, e);
  }
});

dimensionSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = dimensionSearchHandle.value.toLowerCase();
  objRelations.innerHTML = "";

  try {
    const res = await axios.get(`http://localhost:3000/dimensions`);
    const matchingDimension = res.data.find(
      (dimension) => dimension.dimensionName.toLowerCase() === searchHandleInput
    );

    if (matchingDimension) {
      console.log(matchingDimension);
      objInfo.textContent = `Dimension: ${matchingDimension.dimensionName}`;
      matchingDimension.dimensionBiomes.forEach((dimensionSeed) => {
        const fetchedData = document.createElement(`p`);
        fetchedData.className = `biome-name counter-${classIncrements}`;
        fetchedData.textContent = dimensionSeed.biomeName;
        objRelations.appendChild(fetchedData);
        classIncrements++;
      });

      objImg.src = matchingDimension.dimensionImage;
    } else {
      objInfo.textContent = `404 Error | Dimension not found.`;
      objImg.src = ``;
    }
  } catch (e) {
    console.error(`Error | Could not get Dimensions:`, e);
  }
});

mobSearchBttn.addEventListener(`click`, async () => {
  const searchHandleInput = mobSearchHandle.value.toLowerCase();
  objRelations.innerHTML = "";

  try {
    const res = await axios.get(`http://localhost:3000/mobs`);
    const matchingMob = res.data.find(
      (mob) => mob.mobName.toLowerCase() === searchHandleInput
    );

    if (matchingMob) {
      console.log(matchingMob);
      objInfo.textContent = `Mob: ${matchingMob.mobName}`;
      objImg.src = matchingMob.mobImage;

      matchingMob.biomeMobBelongsTo.forEach((mobSeed) => {
        const fetchedData = document.createElement(`p`);
        fetchedData.className = `biome-name`;
        fetchedData.textContent = await`Biome: ${mobSeed.biomeName}`;
        objRelations.appendChild(fetchedData);
      });
    } else {
      objInfo.textContent = `404 Error | Mob not found.`;
      objImg.src = ``;
    }
  } catch (e) {
    console.error(`Error | Could not get Mobs:`, e);
  }
});
