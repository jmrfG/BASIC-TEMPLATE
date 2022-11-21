from fastapi import APIRouter
from API.endpoints import financial

apiRouter = APIRouter()
apiRouter.include_router(financial.router, prefix='/finance', tags=['finance'])