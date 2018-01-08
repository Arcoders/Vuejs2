
const productos = [
        {nombre: 'Pc Asus', precio: 500},
        {nombre: 'SSD 250-GB', precio: 90},
        {nombre: 'MSI Predator', precio: 1500},
    ];

const mutations = {
    agregarProducto: (state, producto) => productos.unshift(producto)
};

export default {

    state: productos,
    mutations,

}