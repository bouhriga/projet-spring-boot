package com.java.spring.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Emprunt;
import com.java.spring.repository.EmpruntRepo;

@Service("EmpruntService")
public class EmpruntService {
	@Autowired
	private EmpruntRepo empruntrepository;
	
	
	public Collection<Emprunt> findAll() {

		return (Collection<Emprunt>) empruntrepository.findAll();
	}

	
	public Emprunt findone(int ID) {
		
		return empruntrepository.findById(ID).get();
	}

	
	public Emprunt save(Emprunt emprunt) {
		
		return empruntrepository.save(emprunt);
	}

	
	public void delete(int ID) {
		empruntrepository.deleteById(ID);
	} 
    public Emprunt Update(Emprunt emprunt) {
		
		return empruntrepository.save(emprunt);
	}
	
}
