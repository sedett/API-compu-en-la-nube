from pymongo import MongoClient

class MongoDBConnector:
    def __init__(self):
        connection_string = "mongodb+srv://admin:Fresa.12@cluster0.cvzhqtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 
        self.client = MongoClient(connection_string)
    
    #Funcion que insertadatos en la tabla usuarios
    def insert_Users(self, document):    
        database_name = "Compu_nube"
        collection_name = "Users"
 
        db = self.client[database_name]
        collection = db[collection_name]
        result = collection.insert_one(document)
        return result.inserted_id
    

    #Funcion que Busca en la tabla un usuario
    def read_User(self, nombre):
        # Conectarse a la base de datos en MongoDB Atlas
        db = self.client['Compu_nube']
        collection = db['Users']

        # Realizar la búsqueda del usuario por nombre
        usuarios = collection.find({'name': nombre})
        # Imprimir los resultados
        for usuario in usuarios:
            return usuario
        

    #Funcion que Busca en la tabla usuarios
    def read_Users(self):
        # Conectarse a la base de datos en MongoDB Atlas
        db = self.client['Compu_nube']
        collection = db['Users']

        # Realizar la búsqueda del usuario por nombre
        usuarios = collection.find()
        # Imprimir los resultados
        return list(usuarios)
    
    
    #Funcion que Busca en la tabla un ID
    def read_Id(self, nombre):
        # Conectarse a la base de datos en MongoDB Atlas
        db = self.client['Compu_nube']
        collection = db['Users']

        # Realizar la búsqueda del usuario por nombre
        usuarios = collection.find({'id': nombre})
        # Imprimir los resultados
        for usuario in usuarios:
            return usuario



connector = MongoDBConnector()


inserted_id = connector.read_Users()
print(inserted_id)

'''
Ejemplo de como utilizar la bd



'''


