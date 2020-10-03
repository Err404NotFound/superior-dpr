package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.courses.ComputerScienceMajorRequiredCore;

public interface ComputerScienceMajorRequiredCoreRepository extends MongoRepository<ComputerScienceMajorRequiredCore, String> {

	List<ComputerScienceMajorRequiredCore> findByCompletionStatus(String status);
}
