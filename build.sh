#!/usr/bin/env bash

./generate.sh

ng build --prod --outputPath=docs
cp docs/index.html docs/404.html