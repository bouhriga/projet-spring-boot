package com.java.spring.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.spring.model.Document;
import com.java.spring.repository.DocumentRepo;

@Service("DocumentService")
public class DocumentService {
	@Autowired
	private DocumentRepo documentrepository;

	
    public Document Update(Document document) {
		
		return documentrepository.save(document);
	}

    public Document findone(int id) {
		
		return documentrepository.findById(id).get();
	}
	
}
