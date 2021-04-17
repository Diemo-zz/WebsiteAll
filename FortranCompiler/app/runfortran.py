from fastapi import FastAPI
from compile_fortran_code import compile_fortran_code, run_fortran_code
from pydantic import BaseModel


class Code(BaseModel):
    code: str


class Program(BaseModel):
    name: str


app = FastAPI()


@app.post("/compile_fortan/")
async def hello_world(code: Code):
    filename, output, compiled = await compile_fortran_code(code.code)
    return {"name": filename, "output": output, "success": compiled}


@app.post('/run_fortran')
async def run_fortran(program: Program):
    res = await run_fortran_code(program.name)
    return res
