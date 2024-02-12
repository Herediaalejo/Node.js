const sumar = require('./sumar')

 test('sumar devuelve la suma correcta de dos números', ()=>{
    const a = 2;
    const b = 3;
    const resultadoEsperado = 5;

    const resultado = sumar(a,b);

    expect(resultado).toBe(resultadoEsperado);
 })