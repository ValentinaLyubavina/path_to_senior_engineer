import numpy as np
from sentence_transformers import SentenceTransformer

class Retriever:
    def __init__(self, knowledge_base, index):
        self.knowledge_base = knowledge_base
        self.index = index
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')

    def retrieve_relevant_context(self, query, top_k=3):
        query_vector = self.embedding_model.encode([query])
        distances, indices = self.index.search(np.array(query_vector).astype('float32'), top_k)
        return [self.knowledge_base[i] for i in indices[0]]
