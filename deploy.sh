#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
<<<<<<< HEAD
git push -f git@github.com:DavidGarr-Bang/DavidGarr-Bang.github.io.git main
=======
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
>>>>>>> 48cd620ee19e7f6892f0727bd323da5fa7b18fbf


cd -