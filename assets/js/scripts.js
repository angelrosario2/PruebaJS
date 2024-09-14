const cantidadElement = document.getElementById("cantidad");
const totalElement = document.getElementById("total");
const precioElement = document.getElementById("precio");
const btnIncrementar = document.getElementById("btn-incrementar");
const btnDecrementar = document.getElementById("btn-decrementar");

let cantidad = 1;
const precioBase = 400000;

function actualizarTotal() {
  const total = cantidad * precioBase;
  totalElement.innerHTML = `$${total}`;
}

btnIncrementar.addEventListener("click", () => {
  cantidad++;
  cantidadElement.innerHTML = cantidad;
  actualizarTotal();
});

btnDecrementar.addEventListener("click", () => {
  if (cantidad > 1) {
    cantidad--;
    cantidadElement.innerHTML = cantidad;
    actualizarTotal();
  }
});
