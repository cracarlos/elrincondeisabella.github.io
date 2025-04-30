document.addEventListener('DOMContentLoaded', function() {
    // Nav Producto
    const enlace = document.getElementById('navProducto');
    const destino = document.getElementById('productos');
  
    enlace.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      destino.scrollIntoView({ behavior: 'smooth' });
    //   window.history.pushState(null, '', '#seccion-objetivo'); // Opcional: Actualiza la URL sin recargar la página
    });

    // Nav Nosotros
    const navNosotros = document.getElementById('navNosotros');
    const bodyNosotros = document.getElementById('sobreNosotros');
  
    navNosotros.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      bodyNosotros.scrollIntoView({ behavior: 'smooth' });
    //   window.history.pushState(null, '', '#seccion-objetivo'); // Opcional: Actualiza la URL sin recargar la página
    });

    // Nav Contafto
    const navContacto = document.getElementById('navContacto');
    const bodyContacto = document.getElementById('contacto');
  
    navContacto.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      bodyContacto.scrollIntoView({ behavior: 'smooth' });
    //   window.history.pushState(null, '', '#seccion-objetivo'); // Opcional: Actualiza la URL sin recargar la página
    });

});