const urlUsuario ='http://localhost:8080/usuario/'//URL a donde se hace la petición
const btniniciarSesion = document.querySelector(".btnIniciarSesion"); //obtenemos el boton del HTML

var validarUsuario = function(){
    var inputUsuario = document.getElementById("usuario").value;
    var inputContraseña = document.getElementById("contraseña").value;
    console.log(inputUsuario);
    console.log(inputContraseña);
    //validar el usuario y contraseña ingresados
    fetch(urlUsuario,{
        method : "get"
      })
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
    let tbodyContainer = document.querySelector(".tablecontainer");
    let totales= document.querySelector(".totales");
    var inputFolio = document.getElementById("folioVenta").value;
    console.log(inputFolio);

    //validar el usuario y contraseña ingresados
    // fetch(urlUsuario+"getAll",{
    //     method : "get"
    //   })
    fetch("/venta.json")
      .then(response => { 
        return response.json();
      })
      .then(json =>{ 
        venta = JSON.stringify(json); 
        venta = JSON.parse(venta); 
        var contador = 0; 
        var num = 1;
        for (let i = 0; i < venta.length; i++) { 
            if(venta[i].idVenta == inputFolio){
                addTabla(venta[i],tbodyContainer, num);
                contador= contador+1;
                num = num + 1;  
            }//if
        }//for
        totales.innerHTML = 
                                `<label> Total Productos:</label>
                                <label></label>
                                <label>Total de Venta:</label>
                                <label></label>`;
        if(contador===0){//si no hubiera ninguna coincidencia
            console.log("No hay ventas");
        }
    });   
}

//inyecta la tabla
function addTabla(item,clase,num){
    const itemHTML = 
    `   <div class="trenglon">
        <tr>
        <td scope="row">"${num}"</td>
        <td>"${item.producto}"</td>
        <td>"${item.cantidad}"</td>
        <td>"${item.precio}"</td>
        <td>"${item.total}"</td>
        </tr>
        </div>
    `;
    clase.innerHTML += itemHTML;
  }

