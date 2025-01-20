from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

class Indexator:
    def __init__(self, knowledge_base):
        self.knowledge_base = knowledge_base
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        self.index = None

    def create_index(self):
        self.knowledge_vectors = self.embedding_model.encode(self.knowledge_base)
        self.index = faiss.IndexFlatL2(self.knowledge_vectors.shape[1])
        self.index.add(np.array(self.knowledge_vectors).astype('float32'))

    def save_index(self, index_file='index.bin'):
        faiss.write_index(self.index, index_file)

    def load_index(self, index_file='index.bin'):
        self.index = faiss.read_index(index_file)
