const urlVentas ='http://localhost:8080/detalle/'

var getVenta = function(){
    let tbodyContainer = document.querySelector(".tablecontainer");
    let totales= document.querySelector(".totales");
    var inputFolio = document.getElementById("folioVenta").value;
    console.log(inputFolio);

    fetch(urlVentas+inputFolio,{
        method : "get"
      })
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