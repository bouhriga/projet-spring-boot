package com.java.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Livre;
import com.java.spring.repository.LivreRepo;


@Service("LivreService")
public class LivreService {
	@Autowired
	private  LivreRepo livrerepository;
	public Iterable<Livre> findAll() {

		return livrerepository.findAll();
	}

	
	public Livre findone(int ID) {
		
		return livrerepository.findById(ID).get();
	}

	
	public Livre save(Livre livre) {
		
		return livrerepository.save(livre);
	}

	
	public void delete(int ID) {
		livrerepository.deleteById(ID);
	} 
public Livre Update(Livre livre) {
		
		return livrerepository.save(livre);
	}

}
