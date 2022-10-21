package com.java.spring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.java.spring.model.Revue;
@CrossOrigin("*")
@Repository("RevueRepo")
public interface RevueRepo extends CrudRepository<Revue, Integer> {

}
