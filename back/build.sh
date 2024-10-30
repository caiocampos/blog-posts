#!/bin/bash

echo "require(\"./main\");" > dist/index.js
echo "# .gitignore
node_modules/
package-lock.json" > dist/.gitignore
cp dist.json dist/package.json