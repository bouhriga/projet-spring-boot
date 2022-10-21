package com.java.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="emprunt")
public class Emprunt {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_emprunt;
	@Column(name="dateEmp")
	private String dateEmp;
	@Column(name="dateRet ")
	private String dateRet;
    @JoinColumn(name = "cin", referencedColumnName = "cin")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
	@OneToOne(fetch = FetchType.LAZY)
	private Adherent adherent;
	@Column(name="id_document")
	private int id_document;
	
	public Emprunt() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Emprunt(int id_emprunt, String dateEmp, String dateRet, Adherent adherent, int id_document) {
		super();
		this.id_emprunt = id_emprunt;
		this.dateEmp = dateEmp;
		this.dateRet = dateRet;
		this.adherent = adherent;
		this.id_document = id_document;
	}

	public int getId_emprunt() {
		return id_emprunt;
	}

	public void setId_emprunt(int id_emprunt) {
		this.id_emprunt = id_emprunt;
	}

	public String getDateEmp() {
		return dateEmp;
	}

	public void setDateEmp(String dateEmp) {
		this.dateEmp = dateEmp;
	}

	public String getDateRet() {
		return dateRet;
	}

	public void setDateRet(String dateRet) {
		this.dateRet = dateRet;
	}

	public Adherent getAdherent() {
		return adherent;
	}

	public void setAdherent(Adherent adherent) {
		this.adherent = adherent;
	}

	public int getId_document() {
		return id_document;
	}

	public void setId_document(int id_document) {
		this.id_document = id_document;
	}
	
}