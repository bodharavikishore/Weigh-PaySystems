#Tushar Borole
#Python 2.7

from flask import Flask,send_from_directory,render_template
from flask_restful import Resource, Api
from package.common import Common
import json


with open('config.json') as data_file:
    config = json.load(data_file)

app = Flask(__name__, static_url_path='')
api = Api(app)

# Routes

@app.route('/')
def index():
    return app.send_static_file('demo.html')


if __name__ == '__main__':
    app.run(debug=True,host=config['host'],port=config['port'])