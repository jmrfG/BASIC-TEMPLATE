from Entities.Credit import Credit
from Entities.Debt import Debt

class CreateOperation:
    def __init__(self, operationsRepo) -> None:
        self.operationsRepo = operationsRepo

    def perform(self, type: str, value: float, description: str):
        opList:list = self.operationsRepo.selecAll()
        newOperation = None
        if type == "credit":
            newOperation=Credit(value, description)
        elif type == "debt":
            newOperation = Debt(value, description)
        opList.add(newOperation)
        self.operationsRepo.update(opList)  