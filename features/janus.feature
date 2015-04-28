Feature: As an authorized user, I can login to iMedidata and access any studies in Design Optimization.
  I am also authorized to perform CRUD operations on studies.


  @login
  @POC-001
  Scenario: I can login to imedidata
    Given I login to the iMedidata page
    And I visit the Landing page for Design Optimization
