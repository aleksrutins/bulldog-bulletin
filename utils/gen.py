from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(
        enabled_extensions=("html", "xml", "j2")
    )
)

def compile_template(name: str, out_path: str, *args, **kwargs):
    print(f'compile: {out_path}')
    template = env.get_template(name + ".j2")

    out_dir = f'public{out_path}'
    out_file = f'{out_dir}index.html' if out_path == '/' else f'{out_dir}/index.html'

    Path(out_dir).mkdir(parents=True, exist_ok=True)

    with open(out_file, 'w') as f:
        f.write(template.render(*args, **kwargs))