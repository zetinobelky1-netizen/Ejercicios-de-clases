import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DIAS_VENTA = 5;

rl.question('Ingrese la cantidad de entradas vendidas diariamente: ', (respuesta) => {
    const entradasPorDia = Number(respuesta);
    let totalEntradasVendidas = 0;

    for (let dia = 1; dia <= DIAS_VENTA; dia++) {
        totalEntradasVendidas += entradasPorDia;
    }

    console.log(`\nEn total se vendieron ${totalEntradasVendidas} entradas durante los ${DIAS_VENTA} días.`);
    rl.close();
});