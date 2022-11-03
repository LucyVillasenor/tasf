package com.tasf.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idusuario")
	private Long idUsuario;
	@Column(name = "usuario")
	private String usuario;
	@Column(name = "contraseña")
	private String contraseña;
	
	public UsuarioModel() {
        super();
    }

	public Long getIdUsuario() {
		return idUsuario;
	}

	public String getUsuario() {
		return usuario;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	@Override
	public String toString() {
		return "UsuarioModel [idUsuario=" + idUsuario + ", usuario=" + usuario + ", contraseña=" + contraseña + "]";
	}

}//classUsuario
