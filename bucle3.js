import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DIAS_TRANSPORTE = 6;

rl.question('Ingrese el gasto diario en transporte ($): ', (respuesta) => {
    const gastoDiario = Number(respuesta);
    let gastoAcumulado = 0;

    console.log("\n--- Progreso del gasto acumulado ---");
    for (let dia = 1; dia <= DIAS_TRANSPORTE; dia++) {
        gastoAcumulado += gastoDiario;
        console.log(`Día ${dia}: Gasto acumulado = $${gastoAcumulado.toFixed(2)}`);
    }

    console.log(`\nGasto total final: $${gastoAcumulado.toFixed(2)}`);
    rl.close();
});