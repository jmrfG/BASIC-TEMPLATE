from fastapi import APIRouter, Request
from Entities.Operations import Operations
from Instances.localStorageOperationsRepo import localOperationsRepository
from Instances.dbOperations import DatabaseOperationsRepository

router = APIRouter()

localStorage =  localOperationsRepository()
@router.get("/localData")
def test():
    requestedData = localStorage.selectAll()
    return requestedData
    

@router.get("/remoteDate")
def remoteData():
    repo = DatabaseOperationsRepository()
    return repo.selectAll()

@router.post("/registrarOperacao")
async def registrarOperacao(request: Request):
    data = await request.json()
    print(data)
    localStorage.add(data)

@router.post("/insertOperation")
async def insertOperation(request: Request):
    data = await request.json()
    print(data)
    return DatabaseOperationsRepository().add(data)


