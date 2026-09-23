import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuánto dinero ahorra cada día?: ', (respuesta) => {
    const ahorroDiario = Number(respuesta);
    let ahorroTotal = 0;

    for (let dia = 1; dia <= 5; dia++) {
        ahorroTotal = ahorroTotal + ahorroDiario;
        console.log(`Día ${dia} ahorro acumulado: $${ahorroTotal.toFixed(2)}`);
    }

    console.log(`\nAhorro total final: $${ahorroTotal.toFixed(2)}`);
    rl.close();
});