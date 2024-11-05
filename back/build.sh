#!/bin/bash

yarn build:webpack

echo "require(\"./main\");" > dist/index.js

echo "# .gitignore
node_modules/
package-lock.json" > dist/.gitignore

node generate-dist-json.js

cp dist.json dist/package.json