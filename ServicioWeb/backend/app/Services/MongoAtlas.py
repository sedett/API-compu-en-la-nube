from pymongo import MongoClient

class MongoDBConnector:
    def __init__(self):
        connection_string = "mongodb+srv://admin:Fresa.12@cluster0.cvzhqtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 
        self.client = MongoClient(connection_string)
    
    #Funcion que inserta usuarios tabla
    def insert_Users(self, document):    
        database_name = "Compu_nube"
        collection_name = "Users"
 
        db = self.client[database_name]
        collection = db[collection_name]
        result = collection.insert_one(document)
        return result.inserted_id
    

    #Funcion que busca usuarios por nombre
    def read_User(self, nombre):
        db = self.client['Compu_nube']
        collection = db['Users']
        # Realizar la búsqueda del usuario por nombre
        usuarios = collection.find({'name': nombre})
        # Imprimir los resultados
        for usuario in usuarios:
            return usuario
    

    #Funcion que busca usuarios por ID
    def read_Id(self, nombre):
        db = self.client['Compu_nube']
        collection = db['Users']
        # Realizar la búsqueda del usuario por ID
        usuarios = collection.find({'id': nombre})
        print(usuarios)
        # Imprimir los resultados
        for usuario in usuarios:
            return usuario