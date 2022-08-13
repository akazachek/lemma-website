from logging import root
from flask import Flask, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
from api.api import api_handler

import subprocess

lemma = Flask(__name__,
              template_folder="./content/dist",
              static_url_path="",
              static_folder="./content/dist/")
CORS(lemma)
api = Api(lemma)
api.add_resource(api_handler, "/api")


@lemma.route("/", defaults={"page": "landing"})
@lemma.route("/about", defaults={"page": "about"})
@lemma.route("/founders", defaults={"page": "founders"})
@lemma.route("/apply", defaults={"page": "apply"})
def serve(page):
    # use node to call rendering function (i.e. rendering react to html)
    cli = ["node", "content/dist/render.js", page]
    render = subprocess.Popen(cli, stdout=subprocess.PIPE)
    rendered_html = render.stdout.read()
    # decode to utf-8 and then strip newline
    root_html = rendered_html.decode("utf-8").strip()
    return render_template("index.html", root_html=root_html)


# for starting flask by running the file
if __name__ == "__main__":
    lemma.run(debug=True)
