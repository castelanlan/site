from flask import Flask
from flask import render_template as rt

app = Flask(__name__)

@app.route("/")
@app.route("/index.html")
def catalogo():
    return rt('index.html')

@app.route("/about.html")
def sobre():
    return rt('about.html')

@app.route("/contato.html")
def contato():
    return rt('contato.html')