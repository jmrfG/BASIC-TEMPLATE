from abc import ABC, abstractclassmethod
from Entities.Operations import Operations
class OperationsRepository(ABC):
    
    @abstractclassmethod
    def add(self, operation: Operations):
        raise (NotImplementedError)

    @abstractclassmethod
    def selectAll(self):
        raise (NotImplementedError)

    @abstractclassmethod
    def update(self, newList):
        raise (NotImplementedError)