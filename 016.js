"use strict";
(function () {
    var activar = function (quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        console.log(quien + " activ\u00F3 la " + objeto);
    };
    activar('Gordon');
})();
