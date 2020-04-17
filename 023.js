"use strict";
(() => {
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi', 'Scott', true, 1);
    console.log(antman);
})();
