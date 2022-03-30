#!/usr/bin/env bash

./generate.sh

ng build --outputPath=docs
cp docs/index.html docs/404.html