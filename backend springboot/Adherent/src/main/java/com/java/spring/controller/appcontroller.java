package com.java.spring.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.java.spring.model.Emprunt;
import com.java.spring.model.Adherent;
import com.java.spring.model.Dictionnaire;
import com.java.spring.model.Document;
import com.java.spring.model.Livre;
import com.java.spring.model.Revue;
import com.java.spring.service.AdherentService;

@RestController
@CrossOrigin("*")

public class appcontroller {
	@Autowired
	private AdherentService adherentsService;
	
	//======================adherent=======================
	//--------------------Get Adherent list----------------
	@GetMapping(value="Adherents")
	public Collection<Adherent> ListAdherents() {
		 return adherentsService.findAll();
		
	}
	//----------------------------Create Adherent----------------------------------------------------
	@RequestMapping(value = "AddAdherent",method= RequestMethod.POST)
	public Adherent addAdherent(@RequestBody Adherent adherent) {
	    Collection<Adherent> adherents = adherentsService.findAll();
		adherentsService.save(adherent);
		System.out.println("Adherents add ");
		return adherent;
		 
	}
	//----------------------------Find Adherent by ID ----------------------------------------------------
	@RequestMapping(value = "FindOneAdherent/{cin}",method=RequestMethod.GET)
	public Adherent findOneAdherentByCin(@PathVariable String cin) {
		return adherentsService.findone(cin);
		
	}
	//----------------------------Update Adherent by ID ----------------------------------------------------
	@RequestMapping(value = "UpdateAdherent/{cin}",method=RequestMethod.PUT)
	public void UpdateAdherent(@PathVariable String cin,@RequestBody Adherent adherent) {
		adherent.setCin(cin);
		Adherent ad = adherentsService.findone(cin);
		adherentsService.Update(adherent);
	}
	//----------------------------Delete Adherent by ID ----------------------------------------------------
	@RequestMapping(value = "DeleteAdherent/{cin}",method= RequestMethod.DELETE)
	public void DeleteAdherent(@PathVariable String cin) {
		adherentsService.delete(cin);
		}




}
