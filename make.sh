#!/bin/sh

rsync -a --exclude-from=".buildignore" * build
cd build
git add .
git commit -am 'deploy'
git push origin gh-pages
