from fastapi import APIRouter
from Entities.Operations import Operations
from Instances.localStorageOperationsRepo import localOperationsRepository

router = APIRouter()

@router.get("/")
def test():
    local = localOperationsRepository()
    create1 = Operations("debt", 100.20, "Conta de Luz")
    create2 = Operations("debt", 120.20, "Conta de Agua")
    create3 = Operations("credit", 150.20, "Venda")
    local.add(create1)
    local.add(create2)
    local.add(create3)
    return {local}