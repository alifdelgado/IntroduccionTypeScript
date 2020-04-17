(() => {
  const activar = (quien: string, momento?:string, objeto:string = 'batiseñal') => {
      console.log(`${quien} activó la ${objeto}`);
  };
  activar('Gordon');
})();
