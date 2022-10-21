package com.java.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Revue;
import com.java.spring.repository.RevueRepo;

@Service("RevueService")
public class RevueService {
	@Autowired
	private RevueRepo revuerepository;
	
	public Iterable<Revue> findAll() {
		return revuerepository.findAll();

	}

	
	public Revue findone(int ID) {
		
		return revuerepository.findById(ID).get();
	}

	
	public Revue save(Revue revue) {
		
		return revuerepository.save(revue);
	}

	
	public void delete(int ID) {
		revuerepository.deleteById(ID);
	} 
public Revue Update(Revue revue) {
		
		return revuerepository.save(revue);
	}

}
