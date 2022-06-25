// Never Type
function plotError(message: string, code: number): never {
    throw {
        errorMessage: message,
        errorCode: code
    };
}

/*
* VOID: void not return anything but reach to the end of function 
* NEVER: not return anything and not reach to the end of function
*/