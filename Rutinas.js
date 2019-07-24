function fn_FechaNac(valor) {
  var oculta = document.getElementById("txtFechaNac");
  oculta.value = valor.value;
}
function fn_validarTodas(div) {
  var contenedor = document.getElementById(div);
  var cajas = contenedor.getElementsByTagName("input");
  for (i = 0; i < cajas.length; i++) {
    if (!fn_validarUnica(cajas[i])) {
      alert("Se encontraron campos incompletos");
      cajas[i].focus();
      return false;
    }
  }
}
function fn_validarUnica(control) {
  if (!control.value.trim().length > 0) return false;
  else return true;
}
function fn_validarNumero(id, campo) {
  var control = document.getElementById(id);
  if (isNaN(control.value)) {
    alert("Ingresa un número en " + campo);
    control.value = "";
    control.focus();
    return false;
  }
  var n = control.value * 1;
  if (n <= 0) {
    alert("El numero debe ser mayor a 0");
    control.value = "";
    control.focus();
    return false;
  }
  return true;
}
function fn_validarCantidad(boton) {
  var probar = boton.parentNode;
  var valores = probar.children;
  if (fn_validarNumero(valores[11].id, "Cantidad")) {
    var stockPedido = valores[11].value;
    var stockMaximo = valores[9].value;
    var residuo = stockMaximo - stockPedido;
    if (residuo >= 0) {
      alert("Se agrego al carrito");
      return true;
    } else {
      alert("Superas el Stock en tienda");
      return false;
    }
  } else {
    return false;
  }
}
