package com.nfi.controllers

import com.nfi.entities.TestEntity
import org.junit.After
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.ResponseEntity
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import static org.junit.Assert.*

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class TestEntityControllerIntegrationSpec {

  @Autowired
  TestEntityController testEntityController

  // provided automatically when SpringBootTest is configured w/ webEnvironment
  // uses whatever port is provided there
  @Autowired
  TestRestTemplate testRestTemplate

  @After
  void cleanup() {
    testEntityController.deleteAll()
  }

  @Test
  public void testCreateTestEntity() {

    ResponseEntity response = testRestTemplate.postForEntity(
        "/testEntities",
        [firstName: "Glen", lastName: "Filson"],
        TestEntity
    )

    assertTrue(TestEntity == response.body.class)
    assertTrue(response.body.firstName == "Glen")
    assertTrue(response.body.lastName == "Filson")

    Long id = response.body.id

    response = testRestTemplate.postForEntity(
        "/testEntities",
        [id: id, firstName: "Glenn", lastName: "Filson"],
        TestEntity
    )

    assertTrue(id == response.body.id)
    assertTrue(TestEntity == response.body.class)
    assertTrue(response.body.firstName == "Glenn")
    assertTrue(response.body.lastName == "Filson")

  }

  @Test
  public void testListEntities() {

    testRestTemplate.postForEntity(
        "/testEntities",
        [firstName: "Glenn", lastName: "Filson"],
        TestEntity
    )

    testRestTemplate.postForEntity(
        "/testEntities",
        [firstName: "CM", lastName: "Liotta"],
        TestEntity
    )

    Map response = testRestTemplate.getForObject(
        "/testEntities",
        Object
    )

    assertNotNull(response._embedded.testEntities.find {it.firstName == "Glenn"})
    assertNotNull(response._embedded.testEntities.find {it.firstName == "CM"})

  }
}
