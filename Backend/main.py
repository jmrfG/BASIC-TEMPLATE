from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from API.api import apiRouter

app = FastAPI(
    title="Projeto FAA Backend",
    openapi_url="/api/openapi.json",
    redoc_url="/api/docs"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(apiRouter, prefix="/api")