"use strict";
(function () {
    var saludar = function (nombre) {
        console.table('Hola, ' + nombre);
    };
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
