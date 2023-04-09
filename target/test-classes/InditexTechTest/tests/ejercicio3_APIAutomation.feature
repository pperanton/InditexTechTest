Feature: Ejercicio3_APIAutomation
    This is feature fiel to test User Interface for ejercicio 3
  
  Background:
    #* url 'http://petstore.swagger.io/v2'
    * header Accept = 'application/json'
    * header api_key = 'special-key'

  Scenario: Create User
    Given url 'http://petstore.swagger.io/v2/user'
    When method POST
    Then status 200
    And print response
    And url '/user/{username}'
    When method GET
    Then status 200
    And print response

  Scenario: GET findbyStatus
    Given url 'http://petstore.swagger.io/v2/pet/findByStatus?status=sold'
    When method GET
    Then status 200
    And print response