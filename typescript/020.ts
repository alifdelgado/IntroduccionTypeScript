(() => {
    const retirarDinero = (montoRerirar: number): Promise<number> => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if(montoRerirar > dineroActual) {
                reject('No hay suficiente dinero');
            } else {
                dineroActual -= montoRerirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500).then(console.log).catch(console.log);
})();