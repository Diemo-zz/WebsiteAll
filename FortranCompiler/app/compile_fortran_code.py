from subprocess import check_output, CalledProcessError, PIPE
import subprocess
from fortran_logging import setup_logger
from uuid import uuid4
from typing import Tuple
import os
from fastapi import HTTPException
fortran_logger = setup_logger("fortan_logger", "fortran.log")


async def generate_unique_name() -> str:
    name = uuid4()
    return str(name)


async def compile_fortran_code(code_in) -> Tuple[str, str, bool]:
    filename=await generate_unique_name()
    name = ""
    with open(f"{filename}.f90", "w") as f:
        f.writelines(code_in)
    try:
        output = check_output(
            ["gfortran", "-o", f"{filename}.out", f"{filename}.f90"], stderr=subprocess.STDOUT, stdin=PIPE,
        )
        res=True
        name = f"{filename}.out"
    except subprocess.CalledProcessError as err:
        output = err.stdout
        res = False
    except Exception as e:
        output = "Unknown Exception - please contact Diarmaid"
        res = False
    os.remove(f"{filename}.f90")
    return name, output, res


async def run_fortran_code(name_in: str) -> str:
    if not os.path.exists(name_in):
        raise HTTPException(detail="File not found - please recompile", status_code=404)
    try:
        output = check_output([f"./{name_in}"], stderr=subprocess.STDOUT, stdin=PIPE)
    except subprocess.CalledProcessError as err:
        output = err.stdout
    except Exception as e:
        output = "Error in running the code. Please contact Diarmaid"
    return output