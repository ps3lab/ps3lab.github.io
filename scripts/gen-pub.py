#!/usr/bin/env python3
import bibtexparser


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
def bibentry_to_str(e):
    return f"""
{e["author"]}. {e["year"]}. "<span class="nocase">{resolve_bucket(e["title"])}</span>." In *{e["booktitle"]}*. {e["address"]}  
"""

def main():
    generated_tex_str = get_md_by_sorted_bib("src/publications.bib")
    with open("src/generated/publications.md", "w") as f:
        f.write(generated_tex_str)


if __name__ == "__main__":
    main()
