from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.wze36.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

point = db.movies.find_one({'title':'가버나움'})['star']
# print(point)

movies = list(db.movies.find({'star': point}, {'_id':False}))
for movie in movies:
  print(movie['title'])

db.movies.update_one({'title':'가버나움'},{'$set':{'star':'0'}})