package com.java.spring.controller;

import java.util.Collection;
import java.util.Date;


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
import com.java.spring.model.Document;
import com.java.spring.service.EmpruntService;
import com.java.spring.service.AdherentService;


@RestController
@CrossOrigin("*")

public class appcontroller {
	
	@Autowired
	private EmpruntService empruntService;
	@Autowired
	private AdherentService adherentsService;

	
//=======================****Gestion des Emprunts****=======================
//_________________________________________________________________________________________________________________________________________________
//------------------------- Get Emprunts list----------------------------------------------------------
@GetMapping(value="GetEmprunts")
public Collection<Emprunt> ListEmprunts() {
	 return empruntService.findAll();
	
}
//----------------------------Create Emprunt----------------------------------------------------
@RequestMapping(value = "AddEmprunt",method= RequestMethod.POST)
public Emprunt addEmprunt(@RequestBody Emprunt emprunt) {
	long millis = System.currentTimeMillis(); 
	Emprunt emp = new Emprunt();
	java.util.Date date = new java.util.Date(millis); 
	System.out.println("dkhalt l eclips ");
	System.out.println("id"+emprunt.getId_document());
	System.out.println("cin"+emprunt.getDateRet());
	emp.setId_document(emprunt.getId_document());
	System.out.println("Id_document "+emprunt.getId_document());
	emp.setDateEmp(date.toString());
	System.out.println("date demp "+date.toString());
	Date dateR = new Date(date.getTime()+(1000*60*60*24*5));
	emp.setDateRet(dateR.toString());
	System.out.println("date dret "+dateR.toString());
	Adherent adherent = adherentsService.findone(emprunt.getDateRet());
	emp.setAdherent(adherent);
	System.out.println("adherent+++++"+adherent.getAdresse()+"cin"+adherent.getCin()+"date naissance"+adherent.getDatenaissance());
    empruntService.save(emp);
	return emp;
	 
}
	 
//----------------------------Find Emprunt by ID ----------------------------------------------------
@RequestMapping(value = "FindEmprunt/{id_emprunt}",method=RequestMethod.GET)
public Emprunt findOneEmprunteById(@PathVariable int id_emprunt) {
	return empruntService.findone(id_emprunt);
	
}
//----------------------------Update Emprunt by ID ----------------------------------------------------
@RequestMapping(value = "UpdateEmprunte/{id_emprunt}",method=RequestMethod.PUT)
public void UpdateEmprunt(@PathVariable int id_emprunt ,@RequestBody Emprunt emprunt) {
	System.out.println("dkhal l ypem eclipce");
	System.out.println("id emp"+id_emprunt);
	System.out.println("id doc"+emprunt.getId_document());
	Emprunt emp= empruntService.findone(id_emprunt);
	emp.setDateEmp(emprunt.getDateEmp());
	emp.setId_document(emprunt.getId_document());
	emp.setDateRet(emprunt.getDateRet());
	empruntService.Update(emp);
}
//----------------------------Delete Emprunt by ID ----------------------------------------------------
@RequestMapping(value = "DeleteEmprunt/{id_emprunt}",method= RequestMethod.DELETE)
public void DeleteEmprunt(@PathVariable int id_emprunt) {
	empruntService.delete(id_emprunt);
	}


}
