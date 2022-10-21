package com.java.spring.model;

import javax.persistence.Entity;
@Entity
public class Revue extends Document{
	private String reference;
	private String  annee_pub;
	
	public Revue(String reference, String annee_pub) {
		super();
		this.reference = reference;
		this.annee_pub = annee_pub;
	}
	
	public Revue() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Revue(int iD, String nom, double prix_vente, int disponible) {
		super(iD, nom, prix_vente, disponible);
		// TODO Auto-generated constructor stub
	}

	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public String getAnnee_pub() {
		return annee_pub;
	}
	public void setAnnee_pub(String annee_pub) {
		this.annee_pub = annee_pub;
	}
	
	
}
