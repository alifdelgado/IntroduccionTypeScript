"use strict";
(() => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Se termino el timeout');
        }, 1000);
    });
    prom.then(console.log).catch(console.log);
})();
