package com.java.spring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.java.spring.model.Emprunt;

@CrossOrigin("*")
@Repository("EmpruntRepo")
public interface EmpruntRepo extends CrudRepository<Emprunt,Integer> {

}
