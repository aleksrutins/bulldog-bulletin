from datetime import datetime
from dateutil import parser
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape
from slugify import slugify

sitemap_baseurl = 'https://bulldog.burrburton.org'

sitemap_urls: list[str] = []

env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(
        enabled_extensions=("html", "xml", "j2")
    ),
)

def fmt_date(date_str: str, date_only: bool = False) -> str:
    format_str = "%m/%d/%Y" if date_only else "%b %d, %Y, %I:%M %p E.T."
    return parser.parse(date_str).strftime(format_str)

env.globals.update(
    slugify=slugify,
    fmt_date=fmt_date
)

def compile_template(name: str, out_path: str, *args, **kwargs):
    print(f'compile: {out_path}')
    template = env.get_template(name + ".j2")

    out_dir = f'public{out_path}'
    out_file = f'{out_dir}index.html' if out_path == '/' else (
               f'{out_dir}' if out_path == '/sitemap.xml' else
               f'{out_dir}/index.html')

    Path(out_dir).mkdir(parents=True, exist_ok=True) if out_path != '/sitemap.xml' else None

    with open(out_file, 'w') as f:
        f.write(template.render(*args, **kwargs))

    sitemap_urls.append(sitemap_baseurl + out_path)

def write_sitemap():
    compile_template('sitemap.xml', '/sitemap.xml', urls=sitemap_urls)