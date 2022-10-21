package com.java.spring.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Adherent;

import com.java.spring.repository.AdherentRepo;

@Service("AdherentService")

public class AdherentService {
	@Autowired
	private AdherentRepo adherentsrepository;
	
	public Collection<Adherent> findAll() {

		return adherentsrepository.findAll();
	}

	
	public Adherent findone(String CIN) {
		
		return adherentsrepository.findById(CIN).get();
	}

	
	public void save(Adherent adherents) {
		
	adherentsrepository.save(adherents);
	}

	
	public void delete(String CIN) {
		adherentsrepository.deleteById(CIN);
	} 
    public Adherent Update(Adherent adherent) {
		
		return adherentsrepository.save(adherent);
	}
}
