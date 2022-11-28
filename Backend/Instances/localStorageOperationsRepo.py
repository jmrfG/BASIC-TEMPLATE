from useCases.ports.operionsrepository import OperationsRepository
from Entities.Credit import Credit
from Entities.Debt import Debt
from Entities.Operations import Operations
import copy


class localOperationsRepository(OperationsRepository):
    __KEY__ = "localStorage_FAA_Finance" 
    def __init__(self) -> object:
        self.opLis:list = []
    
    def add(self, operation:object):
        Operation = None
        Operation = Operations(
            tipoDeOperacao=operation['tipoOperacao'],
            valorTotal=operation['valorTotal'],
            valorPago=operation['valorOperacao'],
            description=operation['descricao'],
            dataDeReferencia=operation['dataRef'],
            dataDePagamento=operation['dataPag']
        )
        self.opLis.append(Operation)
    
    def selectAll(self):
        return copy.deepcopy(self.opLis)

    def update(self, newList:list):
        self.opLis = newList