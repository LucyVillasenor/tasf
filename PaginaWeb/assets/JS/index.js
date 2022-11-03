const btniniciarSesion = document.querySelector(".btnIniciarSesion"); //obtenemos el boton del HTML

var getInfo = function(){
    var inputUsuario = document.getElementById("usuario").value;
    var inputContraseña = document.getElementById("contraseña").value;
    console.log(inputUsuario);
    console.log(inputContraseña);
    //validar el usuario y contraseña ingresados
    // fetch(urlUsuario+"getAll",{
    //     method : "get"
    //   })
    fetch("/usuario.json")
      .then(response => { 
        return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
      })
      .then(json =>{ 
        usuario = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
        usuario = JSON.parse(usuario); //analiza el JSON, y lo transforma en objeto que se almacena en usuario
        var contador = 0; 
        for (let i = 0; i< usuario.length; i++) { //recorre todo el arreglo de usuario 
            if(usuario[i].usuario == inputUsuario  && usuario[i].contraseña == inputContraseña){ 
                console.log("credenciales correctas");
                contador= contador + 1;
            }
        }
        if(contador===0){//si no hubiera ninguna coincidencia
            console.log("credenciales incorrectas");
        }
    });   
}