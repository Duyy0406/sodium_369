from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/gpu_data', methods=['POST'])
def receive_gpu_data():
    if request.is_json:
        data = request.get_json()
        print("Received GPU data:")
        print(json.dumps(data, indent=2))
        return jsonify({"message": "GPU data received successfully!"}), 200
    else:
        return jsonify({"error": "Request must be JSON"}), 400

if __name__ == '__main__':
    # Make sure Flask is installed: pip install Flask
    app.run(host='0.0.0.0', port=5050)