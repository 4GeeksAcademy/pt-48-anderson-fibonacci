const imprimirFib = (n, numFibInicio = [0, 1]) => {
   if (n < numFibInicio.length) {
    return numFibInicio;
  }

  const nextValue =
    numFibInicio[numFibInicio.length - 1] +
    numFibInicio[numFibInicio.length - 2];
  numFibInicio.push(nextValue);
  return imprimirFib(n, numFibInicio);
};

const newFibonacci = imprimirFib(2);
console.log(newFibonacci);

