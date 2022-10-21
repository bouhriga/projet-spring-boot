package com.java.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Dictionnaire;
import com.java.spring.repository.DictionnaireRepo;

@Service("DictionnaireService")
public class DictionnaireService {
	@Autowired
	private DictionnaireRepo dictionnairerepository;
	public Iterable<Dictionnaire> findAll() {

		return dictionnairerepository.findAll();
	}

	
	public Dictionnaire findone(int ID) {
		
		return dictionnairerepository.findById(ID).get();
	}

	
	public Dictionnaire save(Dictionnaire dictionnaire) {
		
		return dictionnairerepository.save(dictionnaire);
	}

	
	public void delete(int ID) {
		dictionnairerepository.deleteById(ID);
	} 
public Dictionnaire Update(Dictionnaire dictionnaire) {
		
		return dictionnairerepository.save(dictionnaire);
	}

}
