from datetime import datetime

class Operations:
    def __init__(self, tipoDeOperacao: str, 
                valorTotal: float, valorPago: float, 
                description: str, dataDeReferencia: datetime, dataDePagamento: datetime) -> object:
        self.operationId = tipoDeOperacao+str(valorPago)+str(dataDePagamento)
        self.tipoDeOperacao = tipoDeOperacao
        self.valorTotal = valorTotal 
        self.valorPago = valorPago
        self.description = description
        self.dataDeReferencia = dataDeReferencia
        self.dataDePagamento = dataDePagamento

    def getId(self):
        return self.operationId

    def getTipoOperacao(self):
        return self.tipoDeOperacao

    def getValorTotal(self):
        return self.valorTotal

    def getValorPago(self):
        return self.valorPago

    def getDescricao(self):
        return self.description

    def getDataReferencia(self):
        return self.dataDeReferencia

    def getDataPagamento(self):
        return self.dataDePagamento