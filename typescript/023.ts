(() => {
    class Avenger {
        constructor(public nombre:string, public equipo:string, public nombreReal:string, public puedePelear:boolean=true, public peleasGanadas:number=0) {}
    }

    const antman = new Avenger('Antman', 'Capi', 'Scott', true, 1);
    console.log(antman);
})();