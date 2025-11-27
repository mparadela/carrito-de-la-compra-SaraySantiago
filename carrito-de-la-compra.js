// ==========================================
// CARRITO DE COMPRA CON LOCALSTORAGE
// ==========================================

// ==========================================
// VARIABLES GLOBALES
// ==========================================

// Array que contendrá todos los productos del carrito
let carrito = [];

// TO-DO: Obtener referencias al DOM
const inputNombre = document.getElementById("inputNombre"); 
const inputPrecio = document.getElementById("inputPrecio"); 
const btnAgregar = document.getElementById("btnAgregar"); 
const listaProductos = document.getElementById("listaProductos"); 
const totalDiv = document.getElementById("total"); 

// ==========================================
// FUNCIONES DE LOCALSTORAGE
// ==========================================

/**
 * Guarda el carrito en localStorage
 * Convierte el array a JSON antes de guardar
 */
function guardarCarrito() {
    // TO-DO: Implementar
    // 1. Convertir el array 'carrito' a JSON con JSON.stringify()
    // 2. Guardarlo en localStorage con la clave 'carrito'
const carritoJSON = JSON.stringify(carrito);
localStorage.setItem("carrito", carritoJSON); 
}

/**
 * Carga el carrito desde localStorage
 * Convierte el JSON de vuelta a array
 * @returns {Array} Array de productos o array vacío si no existe
 */
function cargarCarrito() {
    // TO-DO: Implementar
    // 1. Obtener el JSON de localStorage con la clave 'carrito'
    // 2. Si existe, parsearlo con JSON.parse() y devolverlo
    // 3. Si no existe, devolver array vacío []
    // 4. Usar try-catch para manejar errores de parseo
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


// ==========================================
// FUNCIONES DE LÓGICA DEL PROGRAMA
// ==========================================

/**
 * Genera un ID único para cada producto
 * Usa timestamp + número aleatorio
 * @returns {number} ID único
 */
function generarId() {
    return Date.now() + Math.random();
}

/**
 * Añade un nuevo producto al carrito
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio del producto
 */
function agregarProducto(nombre, precio) {
    // TO-DO: Implementar
    // 1. Validar que nombre no esté vacío (trim())
    // 2. Validar que precio sea un número válido (parseFloat)
    // 3. Si no son válidos, mostrar alerta y return
    // 4. Crear objeto producto: { id: generarId(), nombre: nombre, precio: precio }
    // 5. Añadir producto al array 'carrito' con push()
    // 6. Llamar a guardarCarrito()
    // 7. Llamar a renderizarCarrito()
    // 8. Limpiar los inputs
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


/**
 * Elimina un producto del carrito por su ID
 * @param {number} id - ID del producto a eliminar
 */
function eliminarProducto(id) {
    // TO-DO: Implementar
    // 1. Pedir confirmación con confirm()
    // 2. Si confirma, filtrar el array 'carrito' eliminando el producto con ese ID
    // 3. Llamar a guardarCarrito()
    // 4. Llamar a renderizarCarrito()
     const confirmar = confirm("seguro que quieres eliminar este producto?"); 

    if (confimar){
    carrito = carrito.filter(producto => producto.id !== id); 
    guardarCarrito(); 
    renderizarCarrito();
    }
}
}


// ==========================================
// FUNCIONES DE INTERFAZ (RENDERIZADO)
// ==========================================

/**
 * Renderiza todos los productos del carrito en el DOM
 */
function renderizarCarrito() {
    // TO-DO: Implementar
    // 1. Limpiar la lista: listaProductos.innerHTML = ''
    // 2. Si el carrito está vacío, mostrar mensaje "El carrito está vacío"
    // 3. Si no, recorrer el array 'carrito' con forEach()
    // 4. Para cada producto, crear un <li> con:
    //    - Nombre del producto
    //    - Precio del producto
    //    - Botón "Eliminar" con data-id
    // 5. Añadir event listener al botón eliminar
    // 6. Llamar a calcularTotal()

listaProductos.innerHTML =""; 
if (carrito.length === 0){
listaProductos.innerHTML = "<li>El carrito esta vacio</li>"; 
totalDiv.textContent = "";
return; 
}

carrito.forEach(producto =>{
const li = document.createElement("li"); 
const texto = document.createElement("span"); 
texto.textContent = `${producto.nombre}`;
});

}

/**
 * Calcula el total del carrito y lo muestra
 */
function calcularTotal() {
    // TO-DO: Implementar
    // 1. Usar reduce() para sumar todos los precios del carrito
    // 2. Mostrar el total en el elemento #total
    // 3. Formato sugerido: "Total: XX.XX €"
}


// ==========================================
// EVENT LISTENERS
// ==========================================

// TO-DO: Añadir event listener al botón "Añadir"
// btnAgregar.addEventListener('click', () => {
//     agregarProducto(inputNombre.value, inputPrecio.value);
// });

// TO-DO: Permitir añadir con Enter en los inputs


// ==========================================
// INICIALIZACIÓN
// ==========================================

/**
 * Inicializa la aplicación al cargar la página
 */
function inicializar() {
    console.log('🚀 Iniciando aplicación...');
    
    // TO-DO: Implementar
    // 1. Cargar carrito desde localStorage
    // 2. Renderizar el carrito
    // 3. Dar foco al input de nombre
    
    console.log('✅ Aplicación inicializada');
}

// TO-DO: Llamar a inicializar() cuando cargue la página
// inicializar();