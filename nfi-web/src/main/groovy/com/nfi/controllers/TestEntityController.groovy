package com.nfi.controllers

import com.nfi.entities.TestEntity
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "testEntities", path = "testEntities")
public interface TestEntityController extends PagingAndSortingRepository<TestEntity, Long> {

  List<TestEntity> findByLastName(@Param("name") String name);

}
