from subprocess import check_output, CalledProcessError, PIPE
import subprocess
from fortran_logging import setup_logger
from uuid import uuid4
from typing import Tuple
import os
from fastapi import HTTPException
fortran_logger = setup_logger("fortan_logger", "fortran.log")

BASE_FOLDER = os.environ['PROGRAM_FOLDER']

async def generate_unique_name() -> str:
    name = uuid4()
    return f"{str(name)}.f90"


async def compile_fortran_code(code_in) -> Tuple[str, str, bool]:
    unique_name = await generate_unique_name()
    fortran_name = unique_name + ".f90"
    output_name = unique_name + ".out"
    name = ""
    fortran_file = os.path.join(BASE_FOLDER, fortran_name)
    output_file = os.path.join(BASE_FOLDER, output_name)
    with open(fortran_file, "w") as f:
        f.writelines(code_in)
    try:
        output = check_output(
            ["gfortran", "-o", f"{output_file}", f"{fortran_file}"], stderr=subprocess.STDOUT, stdin=PIPE,
        )
        res=True
        name = output_name
    except subprocess.CalledProcessError as err:
        output = err.stdout
        res = False
    except Exception as e:
        output = "Unknown Exception - please contact Diarmaid"
        res = False
    os.remove(f"{fortran_file}")
    return name, output, res


async def run_fortran_code(name_in: str) -> str:
    output_file = os.path.join(BASE_FOLDER, name_in)
    if not os.path.exists(output_file):
        raise HTTPException(detail="File not found - please recompile", status_code=404)
    try:
        output = check_output([f"{output_file}"], stderr=subprocess.STDOUT, stdin=PIPE)
    except subprocess.CalledProcessError as err:
        output = err.stdout
    except Exception as e:
        output = "Error in running the code. Please contact Diarmaid"
    return output