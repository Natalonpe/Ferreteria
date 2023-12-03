document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings");
  
    const usuarios = [
      { correo: "natalonpe2002@gmail.com", contraseña: "12345678" },
      { correo: "natilonpe2002@gmail.com", contraseña: "Natalia1" },
      { correo: "jaconata1126@gmail.com", contraseña: "Jaconata" },
    ];
  
    function login() {
      const usuario = document.getElementById("usuario").value;
      const contraseña = document.getElementById("contraseña").value;
  
      const usuarioEncontrado = usuarios.find((u) => u.correo === usuario);
      const contrasenaCorrecta =
        usuarioEncontrado && usuarioEncontrado.contraseña === contraseña;
  
      let warnings = "";
  
      if (!usuarioEncontrado) {
        warnings += "El usuario no es válido <br>";
      }
  
      if (!contrasenaCorrecta) {
        warnings += "La contraseña no es válida <br>";
      }
  
      if (warnings !== "") {
        parrafo.innerHTML = warnings;
      } else {
        window.location.href = "Pagina.html";
      }
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      login();
    });
  });

  function mostrarDescripcion(elemento) {
    var descripcion = elemento.querySelector('.descripcion');
    
   
    if (descripcion.style.display === 'none' || descripcion.style.display === '') {
        descripcion.style.display = 'block';
    } else {
        descripcion.style.display = 'none';
    }
}
document.addEventListener("DOMContentLoaded", function () {


  function cambiarPagina(offset) {


 
    document.getElementById("prevBtn").disabled = paginaActual === 1;

   
    document.getElementById("nextBtn").disabled = paginaActual === totalPaginas;
  }

});
