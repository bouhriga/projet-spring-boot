package com.java.spring.controller;

import java.util.ArrayList;
import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.java.spring.model.Dictionnaire;
import com.java.spring.model.Document;
import com.java.spring.model.Livre;
import com.java.spring.model.Revue;
import com.java.spring.service.DictionnaireService;
import com.java.spring.service.DocumentService;
import com.java.spring.service.LivreService;
import com.java.spring.service.RevueService;

@RestController
@CrossOrigin("*")

public class appcontroller {
	
	@Autowired
	private LivreService livreService;
	@Autowired
	private RevueService revueService;
	@Autowired
	private DictionnaireService dictionnaireService;
	
	

//=======================**Gestion des Livres**=======================
//_________________________________________________________________________________________________________________________________________________

//----------------------------Get Livre list----------------------------------------------------
@GetMapping(value="GetLivres")
public Iterable<Livre> ListLivres() {
	 return livreService.findAll();
	
}
//----------------------------Create Livre----------------------------------------------------
@RequestMapping(value = "AddLivre",method= RequestMethod.POST)
public Livre addLivre(@RequestBody Livre livre) {
	livreService.save(livre);
	System.out.println("livre add ");
	return livre;
	 
}
//----------------------------Find Livre by ID ----------------------------------------------------
@RequestMapping(value = "FindLivre/{id}",method=RequestMethod.GET)
public Livre findOneLivreById(@PathVariable int id) {
	return livreService.findone(id);
	
}
//----------------------------Update Livre by ID ----------------------------------------------------
@RequestMapping(value = "UpdateLivre/{id}",method=RequestMethod.PUT)
public void UpdateLivre(@PathVariable int id ,@RequestBody Livre livre) {
	livre.setID(id);
	livreService.Update(livre);
}
//----------------------------Delete Livre by ID ----------------------------------------------------
@RequestMapping(value = "DeleteLivre/{id}",method= RequestMethod.DELETE)
public void DeleteLivre(@PathVariable int id) {
	livreService.delete(id);
	}
//=======================***Gestion des Revues***=======================
//_________________________________________________________________________________________________________________________________________________

//----------------------------Get Revue list----------------------------------------------------
@GetMapping(value="GetRevues")
public Iterable<Revue> ListRevues() {
	 return revueService.findAll();
	
}
//----------------------------Create Revue----------------------------------------------------
@RequestMapping(value = "AddRevue",method= RequestMethod.POST)
public Revue addRevue(@RequestBody Revue revue) {
	revueService.save(revue);
	System.out.println("Revue add ");
	return revue;
	 
}
//----------------------------Find Revue by ID ----------------------------------------------------
@RequestMapping(value = "FindRevue/{id}",method=RequestMethod.GET)
public Revue findOneRevueById(@PathVariable int id) {
	return revueService.findone(id);
	
}
//----------------------------Update Revue by ID ----------------------------------------------------
@RequestMapping(value = "UpdateRevue/{id}",method=RequestMethod.PUT)
public Revue UpdateRevue(@PathVariable int id ,@RequestBody Revue revue) {
	revue.setID(id);
	return revueService.Update(revue);
}
//----------------------------Delete Revue by ID ----------------------------------------------------
@RequestMapping(value = "DeleteRevue/{id}",method= RequestMethod.DELETE)
public void DeleteRevue(@PathVariable int id) {
	revueService.delete(id);
	}


//=======================****Gestion des Dictionnaires****=======================
//_________________________________________________________________________________________________________________________________________________

//----------------------------Get Dictionnaire list----------------------------------------------------
@GetMapping(value="GetDictionnaires")
public Iterable<Dictionnaire> ListDictionnaire() {
	 return dictionnaireService.findAll();
	
}
//----------------------------Create Dictionnaire----------------------------------------------------
@RequestMapping(value = "AddDictionnaire",method= RequestMethod.POST)
public Dictionnaire addDictionnaire(@RequestBody Dictionnaire dictionnaire) {
	dictionnaireService.save(dictionnaire);
	System.out.println("Dictionnaire add ");
	return dictionnaire;
	 
}
//----------------------------Find Dictionnaire by ID ----------------------------------------------------
@RequestMapping(value = "FindDictionnaire/{id}",method=RequestMethod.GET)
public Dictionnaire findOneDictionnaireById(@PathVariable int id) {
	return dictionnaireService.findone(id);
	
}
//----------------------------Update Dictionnaire by ID ----------------------------------------------------
@RequestMapping(value = "UpdateDictionnaire/{id}",method=RequestMethod.PUT)
public void UpdateDictionnaire(@PathVariable int id ,@RequestBody Dictionnaire dictionnaire) {
	dictionnaire.setID(id);
	dictionnaireService.Update(dictionnaire);
}
//----------------------------Delete Dictionnaire by ID ----------------------------------------------------
@RequestMapping(value = "DeleteDictionnaire/{id}",method= RequestMethod.DELETE)
public void DeleteDictionnaire(@PathVariable int id) {
	dictionnaireService.delete(id);
	}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*****Gestion des Documents*****$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//_________________________________________________________________________________________________________________________________________________
//------------------------------Get Document list if disponible=1----------------------------------------------------
@RequestMapping(value="Documents_List",method=RequestMethod.GET)
public Collection<Document> findDispo_Documents(){
	Collection<Document> Documents = new ArrayList<Document>();

	 //Dictionnaire
	Iterable<Dictionnaire> dictionnaire=dictionnaireService.findAll();
	for(Dictionnaire dic :dictionnaire) {
		if(dic.getDisponible()==1) {
		Documents.add(dic);
		}}
	//livre
	Iterable<Livre> livres=livreService.findAll();
	for(Livre livre :livres) {
		if(livre.getDisponible()==1) {
			Documents.add(livre);
		}}
	//Revue
	Iterable<Revue> revues=revueService.findAll();
	for(Revue revue :revues) {
		if(revue.getDisponible()==1) {
			Documents.add(revue);
		}}
	 System.out.println("Boucle for:");
	
	return Documents;
	
}
@GetMapping(value="GetDocuments")
public Collection<Document> ListttDocuments() {
	Collection<Document> Documents = new ArrayList<Document>();
	Collection<Dictionnaire> dictionnaires=(Collection<Dictionnaire>) dictionnaireService.findAll();
	for(Dictionnaire dic :dictionnaires) {
		Document d = new Document();
		System.out.println("dic"+dic.getNom()+dic.getID()+dic.getDisponible()+dic.getPrix_vente());
		d.setID(dic.getID());
		d.setNom(dic.getNom());
		d.setDisponible(dic.getDisponible());
		d.setPrix_vente(dic.getPrix_vente());
		System.out.println("d"+d.getNom()+d.getID()+d.getDisponible()+d.getPrix_vente());
	    Documents.add(d);
		}
	Collection<Livre> Livres=(Collection<Livre>)  livreService.findAll();
	for(Livre dic :Livres) {
		Livre d = new Livre();
		System.out.println("dic"+dic.getNom()+dic.getID()+dic.getDisponible()+dic.getPrix_vente());
		d.setID(dic.getID());
		d.setNom(dic.getNom());
		d.setDisponible(dic.getDisponible());
		d.setPrix_vente(dic.getPrix_vente());
		System.out.println("d"+d.getNom()+d.getID()+d.getDisponible()+d.getPrix_vente());
	    Documents.add(d);
		}
	Collection<Revue> Revues=(Collection<Revue>)  revueService.findAll();
	for(Revue dic :Revues) {
		Revue d = new Revue();
		System.out.println("dic"+dic.getNom()+dic.getID()+dic.getDisponible()+dic.getPrix_vente());
		d.setID(dic.getID());
		d.setNom(dic.getNom());
		d.setDisponible(dic.getDisponible());
		d.setPrix_vente(dic.getPrix_vente());
		System.out.println("d"+d.getNom()+d.getID()+d.getDisponible()+d.getPrix_vente());
	    Documents.add(d);
		}
	
	for(Document c: Documents) {
		System.out.println(c.getNom()+c.getID()+c.getDisponible()+c.getPrix_vente());
	}
	 return Documents;
	
}

}
