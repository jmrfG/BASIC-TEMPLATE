from useCases.ports.operionsrepository import OperationsRepository
from config import DATABASE
from Entities.Operations import Operations
import psycopg2


class DatabaseOperationsRepository(OperationsRepository):
    def __init__(self) -> None:
        super().__init__()
        self.con = psycopg2.connect(
            host=DATABASE['host'], 
            database=DATABASE['database'],
            user=DATABASE['user'],
            password=DATABASE['password']
            )
        self.cursor = self.con.cursor()


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
        

        SQL = F"""
            INSERT INTO faa_finance(
	        operationid, tipooperacao, valortotal, valorpago, descricao, datarefecencia, datapagamento)
	        VALUES ('{Operation.getId()}', '{Operation.getTipoOperacao()}', 
            '{Operation.getValorTotal()}', '{Operation.getValorPago()}', 
            '{Operation.getDescricao()}', '{Operation.getDataReferencia()}', '{Operation.getDataPagamento()}' );
        """
        self.cursor.execute(SQL)
        self.con.commit()
        self.con.close()

    def selectAll(self):
        all = """SELECT * FROM public.faa_finance;"""
        self.cursor.execute(all)
        data = self.cursor.fetchall()
        pseudoJSON = []
        for d in data:
            payload = {
                'operationId': d[0],
                'tipoDeOperacao': d[1],
                'valorTotal': d[2],
                'valorPago': d[3],
                'description': d[4],
                'dataDeReferencia': d[5],
                'dataDePagamento': d[6]
            }
            pseudoJSON.append(payload)
        self.con.close()
        return pseudoJSON

    def update(self, newList:list):
        return 2