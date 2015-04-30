Feature: As an authorized user, I can login to iMedidata and access any studies in Design Optimization.
  I am also authorized to perform CRUD operations on studies.


  @login
  @POC-001
  Scenario: I can login to imedidata
    Given I login to the iMedidata page
    And I visit the Landing page for Design Optimization
    Then I log out from the iMedidata page

  @login
  @POC-002
  Scenario: I can login to imedidata
    Given I login to the iMedidata page
    When I select the client division: "SD_MIST104" from the Client Division pane
    And I select the study: "0000 Study with Study Identification link" from the Landing page
    Then I should see the study: "0000 Study with Study Identification link" for the Design Optimization page
    Then I log out from the iMedidata page
