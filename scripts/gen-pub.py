#!/usr/bin/env python3
import bibtexparser
import os
import copy


# FIXME: should we also sort by month?
def get_md_by_sorted_bib(bib_file):
    parser = bibtexparser.bparser.BibTexParser(common_strings=True)
    year_bib = {}
    years = []
    with open(bib_file) as f:
        bibs = bibtexparser.load(f, parser=parser)

    for e in bibs.entries:
        year = e["year"]
        # month = e["month"]
        if year not in year_bib:
            year_bib[year] = []
            years.append(year)
        year_bib[year].append(e)

    years = sorted(years, reverse=True)
    md_content = ""
    for y in years:
        md_content += f"\n## {y}"
        for bib in year_bib[y]:            
            md_content += "\n"
            md_content += bibentry_to_str(bib)

        
    return md_content


def resolve_bucket(s:str):
    s = s.lstrip("{ ")
    return s.rstrip(" }")

def format_author(s:str):
    authors = s.split(" and ")
    prev_authors = authors[:len(authors)-1]
    return ", ".join(prev_authors) + " and " + authors[-1]

def format_in_detail(s:str):
    return "\n        \n        ".join(s.split("\n"))

def get_paper_filepath(e):
    bib_id = e["ID"]
    return f"src/assets/pp/{bib_id}.pdf"

def get_slides_filepath(e):
    bib_id = e["ID"]
    return f"src/assets/pp/{bib_id}-slides.pdf"

def get_slides_url(e):
    bib_id = e["ID"]
    return f"/assets/pp/{bib_id}-slides.pdf"

def get_paper_url(e):
    bib_id = e["ID"]
    return f"/assets/pp/{bib_id}.pdf"

def bib_to_str(e):
    writer = bibtexparser.bwriter.BibTexWriter()
    db = bibtexparser.bibdatabase.BibDatabase()
    copy_e = copy.deepcopy(e)
    copy_e.pop('abstract', None)
    db.entries = [copy_e]
    return writer.write(db)
def bibentry_to_str(e):

    github_star = ""
    if "www-url" in e:
        url = e["www-url"]
        idx = url.find("https://github.com/")
        if idx != -1:
            name = url[len("https://github.com/"):]
            github_star = f"[![GitHub stars](https://img.shields.io/github/stars/{name}.svg?style=social&label=Star&maxAge=2592000)]({url})"

    md = f"""
- <div class="psu-pub-title"><strong>{resolve_bucket(e["title"])}</strong> {github_star} </div>

    {format_author(e["author"])}

    In *{e["booktitle"]}*
"""
    if "www-url" in e:
        url = e["www-url"]
        md += f"&nbsp;&nbsp;[:octicons-link-16:]({url})"
    
    # check if paper exist
    paper_fp = get_paper_filepath(e)
    if os.path.exists(paper_fp):
        md += f"&nbsp;&nbsp;[:octicons-file-16:]({get_paper_url(e)})"
    
    # check if slides exist
    slides_fp = get_slides_filepath(e)
    if os.path.exists(slides_fp):
        md += f"&nbsp;&nbsp;[:material-presentation:]({get_slides_url(e)})"

    # reference button
    md += f"&nbsp;&nbsp;[:octicons-cross-reference-16:](#){{.psu-ref-button}} "

    # abstract button
    if "abstract" in e:
        md += f"&nbsp;&nbsp;[:material-newspaper-variant-outline:](#){{.psu-abs-button}}"
        
            
 
    # check is abstract exist
    if "abstract" in e:
        abstract = e["abstract"]
        md += f"""

    !!! Abstract

        {format_in_detail(abstract)}
        """
    
    md += f"""
    
    !!! BibTeX

        ```
        {format_in_detail(bib_to_str(e))}
        ```
    """
    return md




def main():
    generated_tex_str = get_md_by_sorted_bib("src/publications.bib")
    with open("src/generated/publications.md", "w") as f:
        f.write(generated_tex_str)


if __name__ == "__main__":
    main()
