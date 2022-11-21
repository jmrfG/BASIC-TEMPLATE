from useCases.ports.operionsrepository import OperationsRepository
import copy


class localOperationsRepository(OperationsRepository):
    def __init__(self) -> object:
        self.opLis:list = []
    
    def add(self, operation:object):
        self.opLis.append(operation)
    
    def selectAll(self):
        return copy.deepcopy(self.opLis)

    def update(self, newList:list):
        self.opLis = newList