from Entities.Operations import Operations

class Credit(Operations):
    def __init__(self, value, description) -> object:
        super().__init__("credit", value, description)