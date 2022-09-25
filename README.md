

## Prerequisite
- Node.js
- Python 3

### Install Dependencies
```
$ npm install // Make sure to rerun it if package.json updated.
$ pip3 install -r scripts/requirements.txt // Install deps for python script
```

## Dev
This command will start a development server that serve website at localhost:4200
```bash
// Make sure the data is generated from bib and yaml
$ ./generate.sh

// Start development server to serve website
$ npm start
```

## publications.bib
If this file changed, run `./generate.sh` to update/generate corresponding changes.

## Build
This command is to generate final static website to docs folder
```
$ ./build.sh
```