from flask import Flask, request, jsonify
import math
from flask_restful import Resource, Api
from flask_cors import CORS

# creating the flask app
app = Flask(__name__) #enabling front ent to access backend resources
CORS(app)
# creating the API object
api = Api(app)

class divide(Resource):
    def get(self, num1, num2):
        num1 = float(num1)
        num2 = float(num2)
        return jsonify({"result": (num1 / num2)})
    
class add(Resource):
    def get(self, num1, num2):
        num1 = float(num1)
        num2 = float(num2)
        return jsonify({"result": (num1 + num2)})
    
class subtract(Resource):
    def get(self, num1, num2):
        num1 = float(num1)
        num2 = float(num2)
        return jsonify({"result": (num1 - num2)})
    
class multiply(Resource):
    def get(self, num1, num2):
        num1 = float(num1)
        num2 = float(num2)
        return jsonify({"result": (num1 * num2)})


# adding the defined resources along with their corresponding urlss
api.add_resource(square, "/square/<string:num>")
api.add_resource(square_root, "/root/<string:num>")
api.add_resource(divide, "///<string:num1>/<string:num2>")
api.add_resource(add, "/+/<string:num1>/<string:num2>")
api.add_resource(subtract, "/-/<string:num1>/<string:num2>")
api.add_resource(multiply, "/x/<string:num1>/<string:num2>")


# if __name__ == "__main__":
app.run(debug=True)
