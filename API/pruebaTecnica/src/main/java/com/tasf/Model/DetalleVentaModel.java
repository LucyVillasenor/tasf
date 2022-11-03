package com.tasf.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //Especifica que es una entidad
@Table (name = "detalleventa") //nombre de la tabla tal cual la tenemos en el gestor de BD
public class DetalleVentaModel {
	
	//Atributos (las coulmnas de la tabla)
	@Id//especifica que esta variable es el id de la tabla
	@GeneratedValue(strategy = GenerationType.IDENTITY)//especifica que es autoincremental
	@Column(name = "idDetalleVenta")//especifica el nombre de la columna tal cual como lo tenemos en el gestor de DB
	private Long idDetalleVenta;
	@Column(name = "idVenta")
	private Long idVenta;
	@Column(name = "idProducto")
	private Long idProducto;
	@Column(name = "cantidad")
	private int cantidad;
	
	//constructor con todos los atributos
	public DetalleVentaModel(Long idDetalleVenta, Long idVenta, Long idProducto, int cantidad) {
		super();
		this.idDetalleVenta = idDetalleVenta;
		this.idVenta = idVenta;
		this.idProducto = idProducto;
		this.cantidad = cantidad;
	}
	//constructor vacio
	public DetalleVentaModel() {
		super();
	}
	public Long getIdDetalleVenta() {
		return idDetalleVenta;
	}
	public Long getIdVenta() {
		return idVenta;
	}
	public Long getIdProducto() {
		return idProducto;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setIdDetalleVenta(Long idDetalleVenta) {
		this.idDetalleVenta = idDetalleVenta;
	}
	public void setIdVenta(Long idVenta) {
		this.idVenta = idVenta;
	}
	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	//toString
	@Override
	public String toString() {
		return "DetalleVentaModel [idDetalleVenta=" + idDetalleVenta + ", idVenta=" + idVenta + ", idProducto="
				+ idProducto + ", cantidad=" + cantidad + "]";
	}

	
}//class DetalleModel
