const calculator = require('./calculator.js');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Implementar 2 pruebas unitarias para la función divide().
test('la division de 10 y 2 debe ser 5', () => {
  expect(calculator.divide(10,2)).toBe(5);
});

test('la division de 20 y 5 debe ser 4', () => {
  expect(calculator.divide(20,5)).toBe(4);
});

//Escribir una prueba unitaria para verificar la función divide() pasando 0 como segundo argumento.
test('la division de 20 y 0 debe ser Infinity', () => {
  expect(calculator.divide(20,0)).toBe(Infinity);
});
 
//Corregir la función divide() para que la prueba pase y maneje el caso de la división por 0.

// Implementar 2 pruebas unitarias para la función multiply().
test('la multiplicación de 7 y 7 debe ser 49', () => {
  expect(calculator.multiply(7,7)).toBe(49);
});

test('la multiplicación de 2 y 2 debe ser 4', () => {
  expect(calculator.multiply(2,2)).toBe(4);
});

