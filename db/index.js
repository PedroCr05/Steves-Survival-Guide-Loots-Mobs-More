const git231931838ignore = require(`../git382094820948ignore/git231931838ignore`);
const mongoose = require(`mongoose`);

mongoose
  .connect(
    `mongodb+srv://PedroCr05:${git231931838ignore}@clusters.k4z0f.mongodb.net/mealsAPI?retryWrites=true&w=majority&appName=clusters`
  )
  .then(() => {
    console.log(`
        =================================
        +=[Connection Success: MongoDB]+=
        =================================
        `);
  })
  .catch((e) => {
    console.error(
      `
        ===============================
        =+=+=+ERROR SERVER CRASH]=+=+=+
        ===============================        
        `,
      e.message
    );
  });

mongoose.set(`debug`, true);
const db = mongoose.connection;

module.exports = db;
