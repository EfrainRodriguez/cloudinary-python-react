from flask import Flask, request, jsonify
from flask_cors import CORS
import cloudinary
import cloudinary.uploader
from cloudinary import api

app = Flask(__name__)
CORS(app)
          
cloudinary.config( 
  cloud_name = "nombre_de_tu_cuenta", 
  api_key = "tu_api_key", 
  api_secret = "tu_api_secret" 
)

@app.route('/')
def index():
  return 'Welcome to my API!'

@app.route('/upload', methods=['POST'])
def upload():
  if 'file' not in request.files:
    return jsonify({'error': 'no file'}), 400
  
  file = request.files['file']

  try:
    response = cloudinary.uploader.upload(file, folder='uploads')

    return jsonify({'message': 'file uploaded', 'url': response['secure_url']}), 200
  
  except Exception as error:
    return jsonify({'error': error}), 500

@app.route('/images', methods=['GET'])
def get_images():
  try:
    response = api.resources(type='upload', prefix='uploads/')

    return jsonify({'message': 'images retrieved', "images": response['resources']}), 200
  except Exception as error:
    return jsonify({'error': error}), 500

if __name__ == '__main__':
  app.run(debug=True)
