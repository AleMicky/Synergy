const rendimiento = [
    {
        item: 1,
        codigo: 'CON00360',
        descripcion: 'PERFIL ESTRUCTURAL ACEROS SYY PGC 90 X 41 X 12 X 0.94MM X 6MTS',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 91.51,
        total: 0
    },
    {
        item: 2,
        codigo: 'CON00380',
        descripcion: 'PERFIL ESTRUCTURAL ACEROS SYY PGC 63 X 41 X 12 X 0.94MM X 6MTS',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 75.9,
        total: 0
    },
    {
        item: 3,
        codigo: 'CON00362',
        descripcion: 'PERFIL ESTRUCTURAL ACEROS SYY PGO 0.94MM X 6MTS',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 68.51,
        total: 0
    },
    {
        item: 4,
        codigo: 'CON00039',
        descripcion: 'TORNILLO T1 PUNTA BROCA PATTA 4.2 X 13',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 0.13,
        total: 0
    },
    {
        item: 5,
        codigo: 'CON00038',
        descripcion: 'TORNILLO CABEZA HEXAGONAL PATTA 16 X 3/4',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 0.3,
        total: 0
    },
    {
        item: 6,
        codigo: 'CON00036',
        descripcion: 'PERNO DE ANCLAJE PATTA 3/8 X 1 7/8',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 7.2,
        total: 0
    },
    {
        item: 7,
        codigo: 'CON00361',
        descripcion: 'PERFIL ESTRUCTURAL ACEROS SYY PGU 90 X 40 X 0.94MM X 6MTS',
        unidad: 'Pieza',
        cantiad: 0,
        precio_venta: 77.9,
        total: 0
    }
];


const colonial = {
    CON00360: 0.56,
    CON00380: 0.34,
    CON00362: 0.54,
    CON00039: 10.58,
    CON00038: 36.99,
    CON00036: 0.38,
    CON00361: 0.03
};

const tegahome = {
    CON00360: 0.45,
    CON00380: 0.4,
    CON00362: 0.45,
    CON00039: 7,
    CON00038: 25,
    CON00036: 0.30,
    CON00361: 0.03
};

const duralit = {
    CON00360: 0.42,
    CON00380: 0.28,
    CON00362: 0.34,
    CON00039: 4.02,
    CON00038: 24.16,
    CON00036: 0.32,
    CON00361: 0.02
};


export function OperacionCalular(evento, valor) {

    let indice = {};

    if (evento === 'colonial'){
         indice = colonial;
    }

    if (evento === 'tegahome'){
         indice = tegahome;
    }

    if (evento === 'duralit'){
         indice = duralit;
    }
  
    let suma = 0;
    const resultado = rendimiento.map((value) => {
      
        let operacion =  Math.round(valor* indice[value.codigo]);
        let total =  operacion * value.precio_venta ;

        suma =  suma + total;
        return{
            item: value.item,
            codigo: value.codigo,
            descripcion: value.descripcion,
            unidad: value.unidad,
            cantiad: operacion,
            precio_venta: value.precio_venta,
            total: (Math.round(total * 100) / 100).toFixed(2)  
        }
    });

    return {
        resultado: resultado,
        tota: suma
    };
}