(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    };

    const extraer = ({nombre, poder}:any) => {
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);

    const avengers:string[] = ['Thor', 'Ironman', 'Spiderman'];
    const [, , arana] = avengers;
    // console.log(loki);
    // console.log(hombre);
    console.log(arana);
    const extraerArr = ([thor, ironman, spiderman]:string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
})();