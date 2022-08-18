#!/usr/bin/env bash

# generate the data need for website from bib and yaml file
./generate.sh

# build the static website to docs folder
npx ng build --outputPath=docs

# this is needed for static serving Angular based project
cp docs/index.html docs/404.html