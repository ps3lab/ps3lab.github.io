# PSU Security Lab's Website

## Dev Workflow

!!! Do not manually update any files under src/generated/*

### 0. Prerequistes

- Python 3.x


### 1. Install dependencies
```bash
$ pip3 install -r requirements.txt
```

### 2. Run website locally and update content (src/*.md)
```bash
$ mkdocs serve
```

### 3. Build

```bash

# required only if you update the *.bib file
$ ./scripts/gen-pub.py

# always required
$ ./build.sh
```

### 4. Git commit & push