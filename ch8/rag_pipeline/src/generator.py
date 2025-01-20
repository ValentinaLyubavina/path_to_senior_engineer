from transformers import pipeline

class Generator:
    def __init__(self):
        self.generator = pipeline("text-generation", model="EleutherAI/gpt-neo-1.3B")

    def generate_answer(self, context, query):
        full_input = f"Context:\n{context}\n\nQuestion: {query}\nAnswer:"
        response = self.generator(full_input, max_length=150)
        return response[0]['generated_text'].strip()
