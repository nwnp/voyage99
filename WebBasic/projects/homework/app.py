from flask import Flask, render_template, request, jsonify
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.wze36.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
  name_receive = request.form['name_give']
  comment_receive = request.form['comment_give']

  print('server', name_receive, comment_receive)
  
  doc = {
    'name': name_receive,
    'comment': comment_receive,
  }
  
  db.fans.insert_one(doc)

  return jsonify({'msg':'POST 연결 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
  all_comments = list(db.fans.find({},{'_id':False}))
  return jsonify({'msg':all_comments})

if __name__ == '__main__':
  app.run('0.0.0.0', port=5001, debug=True)