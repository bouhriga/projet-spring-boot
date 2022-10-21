package com.java.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Adherent {
	@Id
	private String cin;
	@Column(name="nom")
	private String nom;
	@Column(name="prenom")
	private String prenom;
	@Column(name="adresse")
	private String adresse;
	@Column(name=" datenaissance")
	private String datenaissance;
	
	public Adherent() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Adherent(String cin, String nom, String prenom, String adresse, String datenaissance) {
		super();
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.datenaissance = datenaissance;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getDatenaissance() {
		return datenaissance;
	}
	public void setDatenaissance(String datenaissance) {
		this.datenaissance = datenaissance;
	}
	
}
