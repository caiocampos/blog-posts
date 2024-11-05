const fs = require('fs');
const packageJson = require("./package.json");
const distJsonName = "./dist.json";
const distJson = require(distJsonName);

    
distJson.dependencies = packageJson.dependencies;
    
fs.writeFile(distJsonName, JSON.stringify(distJson, null, 2), (err) => {
  if (err) return console.error(err);
  console.info(JSON.stringify(distJson));
  console.info('writing to ' + distJsonName);
});