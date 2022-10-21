package com.java.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.java.spring.model.Adherent;

@CrossOrigin("*")
@Repository("AdherentRepo")
public interface AdherentRepo extends JpaRepository<Adherent, String>{

}
