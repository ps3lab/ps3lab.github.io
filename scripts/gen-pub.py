#!/usr/bin/env python3
import bibtexparser
import os
import copy


def get_month_number(month_string):

    month_dict = {
            "jan" : "01",
            "feb" : "02",
            "apr" : "04",
            "may" : "05",
            "jun" : "06",
            "jul" : "07",
            "aug" : "08",
            "sep" : "09",
            "oct" : "10",
            "nov" : "11",
            "dec" : "12",
            }

    key = month_string.strip()[:3].lower()

    if key in month_dict:
        return month_dict[key]
    else:
        return ""

# FIXME: should we also sort by month?
def get_md_by_sorted_bib(bib_file):
    parser = bibtexparser.bparser.BibTexParser(common_strings=True)
    year_bib = {}
    years = []
    with open(bib_file) as f:
        bibs = bibtexparser.load(f, parser=parser)

    for e in bibs.entries:
        year = e["year"]
        month = e["month"]
        year_month = year + get_month_number(month)
        if year_month not in year_bib:
            year_bib[year_month] = []
            years.append(year_month)
        year_bib[year_month].append(e)

    years = sorted(years, reverse=True)
    md_content = ""
    last_year = "1990"
    for y in years:
        real_year = y[:4]
        if real_year != last_year:
            md_content += f"\n## {real_year}"
            last_year = real_year
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
