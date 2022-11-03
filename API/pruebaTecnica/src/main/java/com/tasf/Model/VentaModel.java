package com.tasf.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //Especifica que es una entidad
@Table (name = "venta") //nombre de la tabla tal cual la tenemos en el gestor de BD
public class VentaModel {
	
	@Id//especifica que esta variable es el id de la tabla
	@GeneratedValue(strategy = GenerationType.IDENTITY)//especifica que es autoincremental
	@Column(name = "idVenta")//relaciona la variable con la columna tal cual como lo tenemos en el gestor de DB
	private Long idVenta;
	@Column(name = "total")
	private float total;

	//constructor con todos los atributos
	public VentaModel(Long idVenta, float total) {
		super();
		this.idVenta = idVenta;
		this.total = total;
	}//constructor

	//constructor vacío
	public VentaModel() {
		super();
	}//constructor Vacío
	
	//Geters y Seters
	public Long getIdVenta() {
		return idVenta;
	}

	public float getTotal() {
		return total;
	}

	public void setIdVenta(Long idVenta) {
		this.idVenta = idVenta;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	//toString
	@Override
	public String toString() {
		return "VentaModel [idVenta=" + idVenta + ", total=" + total + "]";
	}
	
	
}//Class VentaModel
