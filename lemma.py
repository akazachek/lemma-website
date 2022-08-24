from logging import root
from flask import Flask, render_template, request
from flask_restful import Resource, Api
from flask_cors import CORS
from api.api import api_handler
import processForm
from flask_mail import Mail

# returns API key
from key import mail_password

import subprocess

lemma = Flask(__name__,
              template_folder="./content/dist",
              static_url_path="",
              static_folder="./content/dist/")

lemma.config["MAIL_SERVER"] = "smtp.gmail.com"
lemma.config["MAIL_PORT"] = 465
lemma.config["MAIL_USERNAME"] = "lemmanetwork@gmail.com"
lemma.config["MAIL_DEFAULT_SENDER"] = "lemmanetwork@gmail.com"
lemma.config["MAIL_PASSWORD"] = mail_password()
lemma.config['MAIL_USE_TLS'] = False
lemma.config['MAIL_USE_SSL'] = True
mail = Mail(lemma)

CORS(lemma)  # remove before prod
api = Api(lemma)
api.add_resource(api_handler, "/api")


def render(page):
    # use node to call rendering function (i.e. rendering react to html)
    cli = ["node", "content/dist/render.js", page]
    render = subprocess.Popen(cli, stdout=subprocess.PIPE)
    rendered_html = render.stdout.read()
    # decode to utf-8 and then strip newline
    root_html = rendered_html.decode("utf-8").strip()
    print(root_html)
    return render_template("index.html", root_html=root_html)


@lemma.route("/", defaults={"page": "landing"}, methods=['POST', 'GET'])
@lemma.route("/about", defaults={"page": "about"}, methods=['POST', 'GET'])
@lemma.route("/founders", defaults={"page": "founders"}, methods=['POST', 'GET'])
@lemma.route("/apply", defaults={"page": "apply"}, methods=['POST', 'GET'])
def serve(page):
    if request.method == "GET":
        return render(page)
    else:
        processForm.instructor_form(mail, request.form)
        return "yes"


# for starting flask by running the file
if __name__ == "__main__":
    lemma.run(debug=True)
