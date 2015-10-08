#!/bin/sh

rsync -a ./ build --exclude build .gitignore make.sh
cd build
git add .
git commit -am 'deploy'
git push origin gh-pages
