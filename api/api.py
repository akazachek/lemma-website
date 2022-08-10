from sre_constants import SUCCESS
from flask_restful import Resource, Api

class api_handler(Resource):
    
    def get(self):
        return {
            "resultStatus": SUCCESS,
            "message": "test"
        }