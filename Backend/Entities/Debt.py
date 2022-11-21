from Entities.Operations import Operations

class Debt(Operations):
    def __init__(self, value, description) -> object:
        super().__init__("debt", value, description)