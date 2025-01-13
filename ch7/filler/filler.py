import time
import mysql.connector
import csv

def connect_to_db():
    while True:
        try:
            connection = mysql.connector.connect(
                host='db',
                user='new_user',
                password='password', 
                database='database'  
            )
            return connection
        except mysql.connector.Error as err:
            print(f"Error: {err}")
            time.sleep(5)

def fill_database():
    connection = connect_to_db()
    cursor = connection.cursor()

    with open('data.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute("INSERT INTO your_table (name, age) VALUES (%s, %s)", (row['name'], row['age']))
    
    connection.commit()

    cursor.execute("SELECT * FROM your_table")
    for record in cursor.fetchall():
        print(record)

    cursor.close()
    connection.close()

if __name__ == "__main__":
    fill_database()
