# PSU Security Lab's Website

## Dev Workflow

### 0. Prerequistes

- Docker
- Python 3.x


### 1. Install dependencies
```bash
$ pip install mkdocs-material
```

### 2. Run website locally and update content (src/*.md)
```bash
$ mkdocs serve
```

### 3. Build

```bash

# required only if you update the *.bib file
$ ./run-pandoc.sh

# always required
$ ./build.sh
```

### 4. Git commit & push