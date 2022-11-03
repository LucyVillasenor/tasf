package com.tasf.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //Especifica que es una entidad
@Table (name = "producto") //nombre de la tabla tal cual la tenemos en el gestor de BD
public class ProductoModel {

	//Atributos (las coulmnas de la tabla)
	@Id//especifica que esta variable es el id de la tabla
	@GeneratedValue(strategy = GenerationType.IDENTITY)//especifica que es autoincremental
	@Column(name = "idproducto")//especifica el nombre de la columna tal cual como lo tenemos en el gestor de DB
	private Long idProducto;
	@Column(name = "descripcion")
	private String descripcion;
	@Column(name = "precio")
	private float precio;
	
	//constructor vacío
	public ProductoModel() {
        super();
    }

	//constructor con todos los atributos
	public ProductoModel(Long idProducto, String descripcion, float precio) {
		super();
		this.idProducto = idProducto;
		this.descripcion = descripcion;
		this.precio = precio;
	}

	//Geters y Seters
	public Long getIdProducto() {
		return idProducto;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public float getPrecio() {
		return precio;
	}
	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public void setPrecio(float precio) {
		this.precio = precio;
	}

	//toString
	@Override
	public String toString() {
		return "ProductoModel [idProducto=" + idProducto + ", descripcion=" + descripcion + ", precio=" + precio + "]";
	}
	
	
}//class ProductoModel
