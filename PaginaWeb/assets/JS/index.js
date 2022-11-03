const btniniciarSesion = document.querySelector(".btnIniciarSesion"); //obtenemos el boton del HTML

var validarUsuario = function(){
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

var getVenta = function(){
    var inputFolio = document.getElementById("folioVenta").value;
    console.log(inputFolio);

    //validar el usuario y contraseña ingresados
    // fetch(urlUsuario+"getAll",{
    //     method : "get"
    //   })
    fetch("/venta.json")
      .then(response => { 
        return response.json(); //cuando la promesa es resuelta, asignamos la info a la variable response
      })
      .then(json =>{ 
        venta = JSON.stringify(json); //convertimos el objeto a una cadena de texto JSON, 
        venta = JSON.parse(venta); //analiza el JSON, y lo transforma en objeto que se almacena en usuario
        var contador = 0; 
        for (let i = 0; i < venta.length; i++) { //recorre todo el arreglo de usuario 
            if(venta[i].idVenta == inputFolio){ 
                console.log("credenciales correctas");
                contador= contador + 1;
            }
        }
        if(contador===0){//si no hubiera ninguna coincidencia
            console.log("credenciales incorrectas");
        }
    });   
}

//inyecta la tabla
function addTabla(item, clase){
    const itemHTML = 
    `<table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio Unitario</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>`;
    clase.innerHTML = itemHTML;
  }

