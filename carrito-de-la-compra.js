
let carrito = [];
const inputNombre = document.getElementById("inputNombre"); 
const inputPrecio = document.getElementById("inputPrecio"); 
const btnAgregar = document.getElementById("btnAgregar"); 
const listaProductos = document.getElementById("listaProductos"); 
const totalDiv = document.getElementById("total"); 

function guardarCarrito() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON); 
}

function cargarCarrito() {

try {
    const datos = localStorage.getItem("carrito");
    if (datos) {
        return JSON.parse(datos); 
    } else{
        return [];
}
} catch (error) {
    console.error("error al cargar carrito", error);
    return []; 
}
}


function generarId() {
    return Date.now() + Math.random();
}

function agregarProducto(nombre, precio) {

    nombre = nombre.trim(); 
    precio = parseFloat(precio); 

    if (nombre === "" || isNaN(precio) || precio <=0){
        alert ("porfavor introduce datos validos"); 
        return; 
    }

const producto = {
    id:generarId(), 
    nombre: nombre, 
    precio: precio
}; 

    carrito.push(producto); 
    guardarCarrito(); 
    renderizarCarrito(); 

    inputNombre.value =""; 
    inputPrecio.value = ""; 
    inputNombre.focus(); 
};

function eliminarProducto(id) {
     const confirmar = confirm("seguro que quieres eliminar este producto?"); 

    if (confirmar){
        carrito = carrito.filter(producto => producto.id !== id); 
        guardarCarrito(); 
        renderizarCarrito();
    }
}


function renderizarCarrito() {
    listaProductos.innerHTML =""; 
    if (carrito.length === 0){
        listaProductos.innerHTML = "<li>El carrito esta vacio</li>"; 
        totalDiv.textContent = "";
        return; 
}

carrito.forEach(producto =>{
    const li = document.createElement("li"); 
    const texto = document.createElement("span"); 
    texto.textContent = `${producto.nombre} - ${producto.precio.toFixed(2)} euros`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "eliminar"; 
    btnEliminar.addEventListener("click", ()=>{
    eliminarProducto(producto.id); 
}); 
    li.appendChild(texto); 
    li.appendChild(btnEliminar);
    listaProductos.appendChild(li); 
});

    calcularTotal();
}

function calcularTotal() {
    const total= carrito.reduce((suma, producto) => suma + producto.precio, 0); 
    totalDiv.textContent = `total: ${total.toFixed(2)} euros`; 
}



btnAgregar.addEventListener("click", ()=>{
    agregarProducto(inputNombre.value, inputPrecio.value); 
});


inputNombre.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        agregarProducto(inputNombre.value, inputPrecio.value); 
    }
}); 


function inicializar() {
    console.log('🚀 Iniciando aplicación...');
    carrito = cargarCarrito(); 
    renderizarCarrito();
    inputNombre.focus(); 
    
    console.log('✅ Aplicación inicializada');
}


window.addEventListener("load", inicializar); 

