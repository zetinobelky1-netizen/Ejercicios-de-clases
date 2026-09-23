import redline from "node:readline";

const rl= redline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
});

const TARIFA_POR_HORA = 2.25;
const CANTIDAD_PRESTAMOS = 4;

rl.question('¿Cuántas horas duró cada préstamo?: ', (respuesta) => {
    const horasPorPrestamo = Number(respuesta);
    let recaudacionTotal = 0;

    for (let prestamo = 1; prestamo <= CANTIDAD_PRESTAMOS; prestamo++) {
        const costoPrestamo = horasPorPrestamo * TARIFA_POR_HORA;
        recaudacionTotal += costoPrestamo;
    }

    console.log(`\nRecaudación total: $${recaudacionTotal.toFixed(2)}`);
    rl.close();
});