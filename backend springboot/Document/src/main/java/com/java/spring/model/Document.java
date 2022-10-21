package com.java.spring.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
@MappedSuperclass

public class Document {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ID;
	private String nom;
	private double prix_vente;
	private int disponible;
	
	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Document(int iD, String nom, double prix_vente, int disponible) {
		super();
		ID = iD;
		this.nom = nom;
		this.prix_vente = prix_vente;
		this.disponible = disponible;
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public double getPrix_vente() {
		return prix_vente;
	}
	public void setPrix_vente(double prix_vente) {
		this.prix_vente = prix_vente;
	}
	public int getDisponible() {
		return disponible;
	}
	public void setDisponible(int disponible) {
		this.disponible = disponible;
	}
	
}
