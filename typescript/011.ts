(() => {
    const saludar = (nombre:string) => {
        console.table('Hola, ' + nombre);
    };
    
    let wolverine = {
        nombre: 'Logan'
    };

    saludar(wolverine.nombre);
})();