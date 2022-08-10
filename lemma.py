from flask import Flask, send_from_directory
from flask_restful import Resource, Api
from flask_cors import CORS
from api.api import api_handler

lemma = Flask(__name__, static_url_path="", static_folder="content/build")
CORS(lemma)
api = Api(lemma)
api.add_resource(api_handler, "/api")

@lemma.route("/", defaults = {"path": ""})
def serve(path):
    return send_from_directory(lemma.static_folder, "index.html")

# for starting flask by running the file
if __name__ == "__main__":
    lemma.run(debug = True)