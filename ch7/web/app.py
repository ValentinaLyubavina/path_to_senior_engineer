from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

def get_db_connection():
    connection = mysql.connector.connect(
        host='db',
        user='new_user',
        password='password',  
        database='database'   
    )
    return connection

@app.route('/')
def get_data():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM your_table")
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    
    return jsonify(results)

@app.route('/health')
def health_check():
    return jsonify(status="OK")

@app.errorhandler(404)
def not_found(error):
    return jsonify(error="Not found"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)