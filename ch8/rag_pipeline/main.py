# main.py
from data_loader import load_knowledge_base
from retriever import Retriever
from generator import Generator
from indexer import Indexator

def main():
    knowledge_base = load_knowledge_base('data/textbook.txt')
    
    indexator = Indexator(knowledge_base)
    indexator.create_index()
    indexator.save_index()  
    
    retriever = Retriever(knowledge_base, indexator.index)  
    generator = Generator()
    
    query = input("Введите ваш вопрос: ")
    relevant_contexts = retriever.retrieve_relevant_context(query)
    context = "\n\n".join(relevant_contexts)

    answer = generator.generate_answer(context, query)
    print("Ответ:", answer)

if __name__ == "__main__":
    main()
