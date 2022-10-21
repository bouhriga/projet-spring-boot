package com.java.spring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.java.spring.model.Document;

@CrossOrigin("*")
@Repository("DocumentRepo")
public interface DocumentRepo extends CrudRepository<Document, Integer>{

}
