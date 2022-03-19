#!/usr/bin/env bash
docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex \
--citeproc src/bib/pub.tex \
-t markdown_strict \
--bibliography src/bib/publications.bib \
-o src/generated/publications.md


