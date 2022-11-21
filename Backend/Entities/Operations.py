from datetime import datetime

class Operations:
    def __init__(self, type, value, description) -> object:
        self.id = type+str(value)
        self.type = type
        self.value = value
        self.description = description
        self.creationDate = datetime.now().isoformat(sep="T", timespec='auto')
