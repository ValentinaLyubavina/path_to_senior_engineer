def load_knowledge_base(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        knowledge_base = file.readlines()
    return [line.strip() for line in knowledge_base if line.strip()]
